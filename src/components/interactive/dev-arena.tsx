"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import {
  cacheDevArenaState,
  continueDevArena,
  createDevArenaState,
  drawDevArena,
  getDevArenaHud,
  HIGH_SCORE_KEY,
  isDevArenaSimulating,
  resizeDevArenaState,
  restoreDevArenaState,
  setDevArenaTarget,
  startDevArenaRound,
  updateDevArenaState,
  type DevArenaState
} from "@/lib/dev-arena-engine";

type ArenaHud = ReturnType<typeof getDevArenaHud> & { highScore: number };

const MAX_DELTA = 1 / 30;

function readThemeColors() {
  if (typeof window === "undefined") {
    return {
      grid: "oklch(0.275 0.006 286)",
      playerFill: "oklch(0.164 0.006 285.68)",
      playerRing: "oklch(0.768 0.166 162.19)",
      bug: "oklch(0.637 0.208 25.33)",
      bugGlow: "oklch(0.637 0.208 25.33)",
      bugStroke: "oklch(0.985 0 0)",
      bugLabel: "oklch(0.985 0 0)",
      hazard: "oklch(0.55 0.18 35)",
      hazardGlow: "oklch(0.637 0.208 25.33)",
      hazardLabel: "oklch(0.985 0 0)",
      obstacle: "oklch(0.22 0.006 286)",
      obstacleText: "oklch(0.712 0.013 286.07)",
      deploy: "oklch(0.768 0.166 162.19)",
      deployText: "oklch(0.765 0.177 163.22)",
      text: "oklch(0.765 0.177 163.22)",
      overlay: "oklch(0.145 0.004 285.82)",
      destructive: "oklch(0.637 0.208 25.33)"
    };
  }

  const styles = getComputedStyle(document.documentElement);

  return {
    grid: styles.getPropertyValue("--border").trim(),
    playerFill: styles.getPropertyValue("--card").trim(),
    playerRing: styles.getPropertyValue("--brand").trim(),
    bug: styles.getPropertyValue("--destructive").trim() || "oklch(0.637 0.208 25.33)",
    bugGlow: styles.getPropertyValue("--destructive").trim() || "oklch(0.637 0.208 25.33)",
    bugStroke: "oklch(0.985 0 0)",
    bugLabel: "oklch(0.985 0 0)",
    hazard: "oklch(0.62 0.19 35)",
    hazardGlow: styles.getPropertyValue("--destructive").trim(),
    hazardLabel: styles.getPropertyValue("--foreground").trim() || "oklch(0.985 0 0)",
    obstacle: styles.getPropertyValue("--secondary").trim(),
    obstacleText: styles.getPropertyValue("--muted-foreground").trim(),
    deploy: styles.getPropertyValue("--brand").trim(),
    deployText: styles.getPropertyValue("--brand-light").trim(),
    text: styles.getPropertyValue("--brand-light").trim(),
    overlay: styles.getPropertyValue("--background").trim(),
    destructive: styles.getPropertyValue("--destructive").trim()
  };
}

function readHighScore() {
  if (typeof window === "undefined") return 0;
  const value = window.localStorage.getItem(HIGH_SCORE_KEY);
  return value ? Number.parseInt(value, 10) || 0 : 0;
}

function writeHighScore(score: number) {
  window.localStorage.setItem(HIGH_SCORE_KEY, String(score));
}

function formatTime(seconds: number) {
  const whole = Math.max(0, Math.ceil(seconds));
  const mins = Math.floor(whole / 60);
  const secs = whole % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function DevArena() {
  const reduceMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<DevArenaState | null>(null);
  const colorsRef = useRef(readThemeColors());
  const frameRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const activeRef = useRef(false);
  const visibleRef = useRef(false);
  const highScoreRef = useRef(0);
  const continueRef = useRef<() => void>(() => {});
  const advancingRef = useRef(false);

  const [hud, setHud] = useState<ArenaHud>({
    score: 0,
    levelBugsFixed: 0,
    bugsRequired: 3,
    bugsOnField: 0,
    timeLeft: 45,
    lives: 3,
    phase: "ready",
    deployed: false,
    level: 1,
    maxLevel: 5,
    levelName: "Staging",
    statusLine: "Press Space or tap to start · 5 levels · fix bugs and deploy",
    highScore: 0
  });

  useEffect(() => {
    highScoreRef.current = readHighScore();
    setHud((current) => ({ ...current, highScore: highScoreRef.current }));
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true });
    if (!ctx) return;

    const pixelRatio = () => Math.min(window.devicePixelRatio || 1, 2);

    const syncHud = (state: DevArenaState, force = false) => {
      const next = getDevArenaHud(state);
      setHud((current) => {
        if (
          !force &&
          current.score === next.score &&
          current.levelBugsFixed === next.levelBugsFixed &&
          current.bugsRequired === next.bugsRequired &&
          current.bugsOnField === next.bugsOnField &&
          Math.ceil(current.timeLeft) === Math.ceil(next.timeLeft) &&
          current.lives === next.lives &&
          current.phase === next.phase &&
          current.deployed === next.deployed &&
          current.level === next.level &&
          current.levelName === next.levelName &&
          current.statusLine === next.statusLine
        ) {
          return current;
        }

        return { ...next, highScore: highScoreRef.current };
      });
    };

    const maybeUpdateHighScore = (state: DevArenaState) => {
      if (state.phase !== "victory" && state.phase !== "over") return;
      if (state.score > highScoreRef.current) {
        highScoreRef.current = state.score;
        writeHighScore(state.score);
        setHud((current) => ({ ...current, highScore: highScoreRef.current }));
      }
    };

    const render = (now = performance.now()) => {
      if (!stateRef.current) return;
      colorsRef.current = readThemeColors();
      drawDevArena(ctx, stateRef.current, colorsRef.current, pixelRatio(), now);
      syncHud(stateRef.current);
      maybeUpdateHighScore(stateRef.current);
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.max(280, Math.floor(rect.width));
      const portrait = width < 640;
      const height = portrait
        ? Math.max(360, Math.floor(width * 1.28))
        : Math.max(208, Math.floor(rect.height));
      const ratio = pixelRatio();

      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      if (!stateRef.current) {
        stateRef.current =
          restoreDevArenaState(width, height) ?? createDevArenaState(width, height);
      } else {
        resizeDevArenaState(stateRef.current, width, height);
      }

      render();
    };

    const loop = (time: number) => {
      if (!activeRef.current || !stateRef.current) return;

      const delta = Math.min(MAX_DELTA, (time - lastTimeRef.current) / 1000);
      lastTimeRef.current = time;

      updateDevArenaState(stateRef.current, delta, time);
      render(time);

      if (!isDevArenaSimulating(stateRef.current)) {
        activeRef.current = false;
        return;
      }

      frameRef.current = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (!visibleRef.current || activeRef.current || !stateRef.current) return;
      if (!isDevArenaSimulating(stateRef.current)) return;
      activeRef.current = true;
      lastTimeRef.current = performance.now();
      frameRef.current = requestAnimationFrame(loop);
    };

    const stopLoop = () => {
      activeRef.current = false;
      cancelAnimationFrame(frameRef.current);
    };

    const beginRun = () => {
      if (!stateRef.current) return;
      startDevArenaRound(stateRef.current);
      render();
      startLoop();
    };

    const handleContinue = () => {
      if (!stateRef.current || advancingRef.current) return;
      const state = stateRef.current;

      if (state.phase === "levelComplete") {
        advancingRef.current = true;
        continueDevArena(state);
        render();
        startLoop();
        window.setTimeout(() => {
          advancingRef.current = false;
        }, 300);
        return;
      }

      if (state.phase === "ready" || state.phase === "over") {
        beginRun();
        return;
      }

      if (state.phase === "victory") {
        continueDevArena(state);
        render();
        startLoop();
      }
    };

    continueRef.current = handleContinue;

    const onKeyDown = (event: KeyboardEvent) => {
      if (!stateRef.current) return;

      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        if (stateRef.current.phase !== "playing") {
          handleContinue();
        }
        return;
      }

      if (stateRef.current.phase !== "playing") return;

      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d"].includes(event.key)
      ) {
        event.preventDefault();
        stateRef.current.keys.add(event.key);
        startLoop();
      }
    };

    const onKeyUp = (event: KeyboardEvent) => {
      stateRef.current?.keys.delete(event.key);
      if (stateRef.current && isDevArenaSimulating(stateRef.current)) startLoop();
    };

    const pointerToArena = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!stateRef.current) return;

      if (stateRef.current.phase !== "playing") {
        handleContinue();
        return;
      }

      canvas.setPointerCapture(event.pointerId);
      const point = pointerToArena(event.clientX, event.clientY);
      setDevArenaTarget(stateRef.current, point.x, point.y);
      startLoop();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = Boolean(entry?.isIntersecting);
        if (visibleRef.current) render();
        else stopLoop();
      },
      { threshold: 0.15 }
    );

    resize();
    observer.observe(container);
    window.addEventListener("resize", resize);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    canvas.addEventListener("pointerdown", onPointerDown);

    return () => {
      if (stateRef.current && stateRef.current.phase !== "ready") {
        cacheDevArenaState(stateRef.current);
      }
      stopLoop();
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      canvas.removeEventListener("pointerdown", onPointerDown);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (hud.phase !== "levelComplete") return;

    const timer = window.setTimeout(() => {
      if (!advancingRef.current) {
        continueRef.current();
      }
    }, 1500);

    return () => window.clearTimeout(timer);
  }, [hud.phase, hud.level]);

  if (reduceMotion) {
    return (
      <div className="mt-14 rounded-xl border border-border/60 bg-card/30 px-4 py-3 text-center text-sm text-muted-foreground sm:mt-16">
        Ship Sprint mini-game paused — reduced motion is enabled.
      </div>
    );
  }

  return (
    <div className="mt-14 space-y-3 sm:mt-16">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold text-brand-light">Ship Sprint</p>
          <p className="text-xs text-muted-foreground sm:text-sm">
            Dodge meetings, outages, and scope creep — fix bugs and ship to prod before time runs
            out.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 font-mono text-xs sm:text-sm">
          <span className="rounded-md border border-border/60 bg-card/40 px-2.5 py-1 text-brand-light">
            L{hud.level}/{hud.maxLevel} {hud.levelName}
          </span>
          <span className="rounded-md border border-border/60 bg-card/40 px-2.5 py-1 text-brand-light">
            Time {formatTime(hud.timeLeft)}
          </span>
          <span className="rounded-md border border-border/60 bg-card/40 px-2.5 py-1">
            Score {hud.score}
          </span>
          <span className="rounded-md border border-border/60 bg-card/40 px-2.5 py-1">
            Best {hud.highScore}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
        <p aria-live="polite">{hud.statusLine}</p>
        <p className="font-mono text-brand-light">
          Bugs {hud.levelBugsFixed}/{hud.bugsRequired}
          {hud.bugsOnField > 0 ? ` · ${hud.bugsOnField} on field` : ""}
          {" · "}
          {"♥".repeat(Math.max(0, hud.lives))}
          {hud.deployed ? " · Deployed" : " · Prod pending"}
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative aspect-[4/5] w-full max-sm:min-h-[360px] overflow-hidden rounded-xl border border-border/60 bg-card/20 sm:aspect-auto sm:h-52"
      >
        <canvas
          ref={canvasRef}
          className="block h-full w-full cursor-crosshair touch-none"
          aria-label="Ship Sprint mini-game with five levels. Fix the required bugs, reach production, and avoid outage hazards before the timer runs out."
          role="img"
        />
        {hud.phase === "levelComplete" && (
          <div className="absolute inset-0 flex items-end justify-center pb-4">
            <button
              type="button"
              onClick={() => continueRef.current()}
              className="pointer-events-auto rounded-lg bg-brand px-4 py-2 font-mono text-sm font-semibold text-brand-dark shadow-lg shadow-brand/20 transition hover:bg-brand-light"
            >
              Next level →
            </button>
          </div>
        )}
      </div>

      <p className="text-xs text-muted-foreground">
        WASD / arrows to move · click or tap to pathfind · Space to start, next level, or retry ·
        Bugs +10 · Prod +50 · Time bonus +2/sec
      </p>
    </div>
  );
}
