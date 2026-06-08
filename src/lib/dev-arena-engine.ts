export type Vec2 = { x: number; y: number };

export type GamePhase = "ready" | "playing" | "levelComplete" | "victory" | "over";

export type Obstacle = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
};

export type Hazard = Vec2 & {
  vx: number;
  vy: number;
  radius: number;
  label: string;
};

export type Bug = Vec2 & { id: number };

export type DeployZone = {
  x: number;
  y: number;
  w: number;
  h: number;
};

export type LevelConfig = {
  name: string;
  bugsRequired: number;
  timeLimit: number;
  hazardSpeed: number;
  playerSpeed: number;
  obstacles: ObstacleTemplate[];
  hazards: HazardTemplate[];
};

type ObstacleTemplate = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
};

type HazardTemplate = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label: string;
};

export type DevArenaState = {
  player: Vec2;
  velocity: Vec2;
  bugs: Bug[];
  obstacles: Obstacle[];
  hazards: Hazard[];
  deployZone: DeployZone;
  score: number;
  lives: number;
  timeLeft: number;
  phase: GamePhase;
  deployed: boolean;
  levelBugsFixed: number;
  bugsRequired: number;
  level: number;
  levelName: string;
  playerSpeed: number;
  maxBugsOnField: number;
  keys: Set<string>;
  target: Vec2 | null;
  width: number;
  height: number;
  portrait: boolean;
  nextBugId: number;
  invincibleUntil: number;
  elapsed: number;
  statusLine: string;
};

export type DevArenaHud = {
  score: number;
  levelBugsFixed: number;
  bugsRequired: number;
  bugsOnField: number;
  timeLeft: number;
  lives: number;
  phase: GamePhase;
  deployed: boolean;
  level: number;
  maxLevel: number;
  levelName: string;
  statusLine: string;
};

const PLAYER_RADIUS = 14;
const BUG_RADIUS = 8;
const FRICTION = 0.86;
const BUG_POINTS = 10;
const DEPLOY_POINTS = 50;
const TIME_BONUS_PER_SECOND = 2;
const START_LIVES = 3;
const INVINCIBLE_MS = 1400;
const PADDING = 28;
const MAX_BUGS_VISIBLE = 6;

export const HIGH_SCORE_KEY = "ship-sprint-high-score";
export const MAX_LEVEL = 5;
export const ARENA_GRID_STEP = 48;

export const LEVELS: LevelConfig[] = [
  {
    name: "Staging",
    bugsRequired: 3,
    timeLimit: 45,
    hazardSpeed: 0.85,
    playerSpeed: 215,
    obstacles: [
      { x: 0.16, y: 0.18, w: 0.14, h: 0.2, label: "Backlog" },
      { x: 0.42, y: 0.48, w: 0.16, h: 0.18, label: "Standup" }
    ],
    hazards: [{ x: 0.34, y: 0.68, vx: 65, vy: 50, radius: 11, label: "Ping" }]
  },
  {
    name: "QA",
    bugsRequired: 5,
    timeLimit: 50,
    hazardSpeed: 1,
    playerSpeed: 210,
    obstacles: [
      { x: 0.12, y: 0.14, w: 0.15, h: 0.22, label: "PR Review" },
      { x: 0.34, y: 0.44, w: 0.14, h: 0.18, label: "Flaky Test" },
      { x: 0.5, y: 0.12, w: 0.14, h: 0.26, label: "Scope Creep" }
    ],
    hazards: [
      { x: 0.26, y: 0.66, vx: 80, vy: 60, radius: 11, label: "Pager" },
      { x: 0.64, y: 0.34, vx: -70, vy: 75, radius: 11, label: "Hotfix" }
    ]
  },
  {
    name: "Pre-Prod",
    bugsRequired: 7,
    timeLimit: 55,
    hazardSpeed: 1.15,
    playerSpeed: 205,
    obstacles: [
      { x: 0.1, y: 0.12, w: 0.15, h: 0.24, label: "Migration" },
      { x: 0.3, y: 0.38, w: 0.14, h: 0.19, label: "Feature Flag" },
      { x: 0.48, y: 0.1, w: 0.15, h: 0.28, label: "Rollback" },
      { x: 0.34, y: 0.62, w: 0.16, h: 0.14, label: "Pen Test" }
    ],
    hazards: [
      { x: 0.22, y: 0.54, vx: 90, vy: 70, radius: 11, label: "P1" },
      { x: 0.58, y: 0.58, vx: -85, vy: 80, radius: 11, label: "Incident" },
      { x: 0.44, y: 0.26, vx: 55, vy: -90, radius: 10, label: "Outage" }
    ]
  },
  {
    name: "Production",
    bugsRequired: 9,
    timeLimit: 58,
    hazardSpeed: 1.3,
    playerSpeed: 200,
    obstacles: [
      { x: 0.08, y: 0.1, w: 0.14, h: 0.26, label: "Deploy Q" },
      { x: 0.24, y: 0.34, w: 0.14, h: 0.19, label: "Change Ctrl" },
      { x: 0.4, y: 0.08, w: 0.15, h: 0.3, label: "Runbook" },
      { x: 0.32, y: 0.58, w: 0.14, h: 0.16, label: "Data Patch" }
    ],
    hazards: [
      { x: 0.2, y: 0.48, vx: 100, vy: 75, radius: 12, label: "Sev-1" },
      { x: 0.56, y: 0.44, vx: -95, vy: 85, radius: 11, label: "Bridge" },
      { x: 0.42, y: 0.72, vx: 75, vy: -90, radius: 11, label: "Rollback" }
    ]
  },
  {
    name: "On-Call",
    bugsRequired: 12,
    timeLimit: 60,
    hazardSpeed: 1.45,
    playerSpeed: 198,
    obstacles: [
      { x: 0.06, y: 0.08, w: 0.14, h: 0.28, label: "War Room" },
      { x: 0.22, y: 0.3, w: 0.15, h: 0.19, label: "Postmortem" },
      { x: 0.4, y: 0.06, w: 0.13, h: 0.32, label: "Escalation" },
      { x: 0.3, y: 0.54, w: 0.15, h: 0.17, label: "VIP Ticket" },
      { x: 0.5, y: 0.44, w: 0.14, h: 0.17, label: "On-Call" }
    ],
    hazards: [
      { x: 0.18, y: 0.42, vx: 110, vy: 85, radius: 12, label: "Sev-1" },
      { x: 0.52, y: 0.28, vx: -105, vy: 90, radius: 12, label: "Pager" },
      { x: 0.38, y: 0.68, vx: 90, vy: -100, radius: 11, label: "Outage" },
      { x: 0.62, y: 0.6, vx: -80, vy: -85, radius: 11, label: "CEO ping" }
    ]
  }
];

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function getLevelConfig(level: number) {
  return LEVELS[clamp(level - 1, 0, LEVELS.length - 1)]!;
}

function inDeployZone(x: number, y: number, zone: DeployZone, margin = 10) {
  return (
    x > zone.x - margin &&
    x < zone.x + zone.w + margin &&
    y > zone.y - margin &&
    y < zone.y + zone.h + margin
  );
}

function isValidBugSpawn(point: Vec2, state: DevArenaState, ignoreBugId?: number) {
  if (
    isBlockedSpawn(point.x, point.y, BUG_RADIUS + 4, state.obstacles, state.hazards) ||
    inDeployZone(point.x, point.y, state.deployZone)
  ) {
    return false;
  }

  if (Math.hypot(point.x - state.player.x, point.y - state.player.y) < 40) {
    return false;
  }

  for (const bug of state.bugs) {
    if (bug.id === ignoreBugId) continue;
    if (Math.hypot(point.x - bug.x, point.y - bug.y) < BUG_RADIUS * 2.8) return false;
  }

  return true;
}

function getPlayableBounds(state: DevArenaState) {
  const top = PADDING + 26;

  if (state.portrait) {
    return {
      left: PADDING,
      right: state.width - PADDING,
      top,
      bottom: state.deployZone.y - PADDING
    };
  }

  return {
    left: PADDING,
    right: state.deployZone.x - PADDING,
    top,
    bottom: state.height - PADDING
  };
}

function randomBugPoint(state: DevArenaState, ignoreBugId?: number): Vec2 {
  const bounds = getPlayableBounds(state);
  const spanX = Math.max(40, bounds.right - bounds.left);
  const spanY = Math.max(40, bounds.bottom - bounds.top);

  for (let attempt = 0; attempt < 64; attempt++) {
    const point = {
      x: bounds.left + Math.random() * spanX,
      y: bounds.top + Math.random() * spanY
    };

    if (isValidBugSpawn(point, state, ignoreBugId)) {
      return point;
    }
  }

  for (let gy = bounds.top + BUG_RADIUS; gy < bounds.bottom; gy += ARENA_GRID_STEP / 2) {
    for (let gx = bounds.left + BUG_RADIUS; gx < bounds.right; gx += ARENA_GRID_STEP / 2) {
      const point = { x: gx, y: gy };
      if (isValidBugSpawn(point, state, ignoreBugId)) {
        return point;
      }
    }
  }

  return { x: bounds.left + spanX * 0.4, y: bounds.top + spanY * 0.45 };
}

function isBlockedSpawn(
  x: number,
  y: number,
  radius: number,
  obstacles: Obstacle[],
  hazards: Hazard[]
) {
  for (const obstacle of obstacles) {
    if (circleIntersectsRect(x, y, radius, obstacle)) return true;
  }

  for (const hazard of hazards) {
    if (Math.hypot(x - hazard.x, y - hazard.y) < radius + hazard.radius + 8) return true;
  }

  return false;
}

function circleIntersectsRect(x: number, y: number, radius: number, rect: Obstacle) {
  const nearestX = clamp(x, rect.x, rect.x + rect.w);
  const nearestY = clamp(y, rect.y, rect.y + rect.h);
  const dx = x - nearestX;
  const dy = y - nearestY;
  return dx * dx + dy * dy < radius * radius;
}

function resolveCircleRect(x: number, y: number, radius: number, rect: Obstacle) {
  const nearestX = clamp(x, rect.x, rect.x + rect.w);
  const nearestY = clamp(y, rect.y, rect.y + rect.h);
  const dx = x - nearestX;
  const dy = y - nearestY;
  const distSq = dx * dx + dy * dy;

  if (distSq >= radius * radius) {
    return { x, y };
  }

  if (distSq === 0) {
    const left = x - rect.x;
    const right = rect.x + rect.w - x;
    const top = y - rect.y;
    const bottom = rect.y + rect.h - y;
    const min = Math.min(left, right, top, bottom);

    if (min === left) return { x: rect.x - radius, y };
    if (min === right) return { x: rect.x + rect.w + radius, y };
    if (min === top) return { x, y: rect.y - radius };
    return { x, y: rect.y + rect.h + radius };
  }

  const dist = Math.sqrt(distSq);
  const overlap = radius - dist;
  return {
    x: x + (dx / dist) * overlap,
    y: y + (dy / dist) * overlap
  };
}

function createLayout(width: number, height: number, level: number) {
  const config = getLevelConfig(level);
  const portrait = height > width;
  const fieldScale = portrait ? 0.78 : 1;

  const obstacles: Obstacle[] = config.obstacles.map((template) => ({
    x: width * template.x,
    y: height * template.y * fieldScale,
    w: Math.max(52, width * template.w, template.label.length * 6.2),
    h: Math.max(22, height * template.h * fieldScale),
    label: template.label
  }));

  const hazards: Hazard[] = config.hazards.map((template) => ({
    x: width * template.x,
    y: height * template.y * fieldScale,
    vx: template.vx * config.hazardSpeed,
    vy: template.vy * config.hazardSpeed,
    radius: template.radius,
    label: template.label
  }));

  let deployZone: DeployZone;

  if (portrait) {
    const deployBand = Math.min(54, Math.max(44, height * 0.11));
    deployZone = {
      x: PADDING,
      y: height - PADDING - deployBand,
      w: width - PADDING * 2,
      h: deployBand
    };
  } else {
    const deployWidth = Math.min(56, width * 0.14);
    deployZone = {
      x: width - deployWidth,
      y: PADDING,
      w: deployWidth,
      h: height - PADDING * 2
    };
  }

  return { obstacles, hazards, deployZone, config, portrait };
}

function bugsRemaining(state: DevArenaState) {
  return Math.max(0, state.bugsRequired - state.levelBugsFixed);
}

function targetBugCount(state: DevArenaState) {
  return Math.min(bugsRemaining(state), state.maxBugsOnField);
}

function spawnBugs(state: DevArenaState) {
  const targetCount = targetBugCount(state);

  if (targetCount === 0) {
    state.bugs = [];
    return;
  }

  if (state.bugs.length > targetCount) {
    state.bugs = state.bugs.slice(0, targetCount);
  }

  while (state.bugs.length < targetCount) {
    const point = randomBugPoint(state);
    state.bugs.push({
      id: state.nextBugId++,
      x: point.x,
      y: point.y
    });
  }
}

function repositionBugs(state: DevArenaState) {
  for (const bug of state.bugs) {
    if (!isValidBugSpawn(bug, state, bug.id)) {
      const point = randomBugPoint(state, bug.id);
      bug.x = point.x;
      bug.y = point.y;
    }
  }

  spawnBugs(state);
}

function applyLevelLayout(state: DevArenaState, level: number) {
  const layout = createLayout(state.width, state.height, level);
  const config = layout.config;

  state.level = level;
  state.levelName = config.name;
  state.bugsRequired = config.bugsRequired;
  state.timeLeft = config.timeLimit;
  state.maxBugsOnField = Math.min(config.bugsRequired, MAX_BUGS_VISIBLE);
  state.playerSpeed = config.playerSpeed;
  state.obstacles = layout.obstacles;
  state.hazards = layout.hazards;
  state.deployZone = layout.deployZone;
  state.portrait = layout.portrait;
}

function findSafePlayerSpawn(state: DevArenaState): Vec2 {
  const bounds = getPlayableBounds(state);
  const candidates = state.portrait
    ? [
        { x: bounds.left + 24, y: bounds.top + 24 },
        { x: state.width * 0.5, y: bounds.top + 32 },
        { x: bounds.right - 24, y: bounds.top + 40 },
        { x: state.width * 0.35, y: bounds.top + (bounds.bottom - bounds.top) * 0.2 }
      ]
    : [
        { x: bounds.left + 20, y: state.height * 0.5 },
        { x: bounds.left + 20, y: bounds.top + 30 },
        { x: bounds.left + 20, y: bounds.bottom - 30 },
        { x: state.width * 0.22, y: state.height * 0.35 }
      ];

  for (const point of candidates) {
    if (!isBlockedSpawn(point.x, point.y, PLAYER_RADIUS + 4, state.obstacles, state.hazards)) {
      return point;
    }
  }

  return { x: PADDING + PLAYER_RADIUS, y: state.height * 0.5 };
}

function resetLevelProgress(state: DevArenaState) {
  state.player = findSafePlayerSpawn(state);
  state.velocity = { x: 0, y: 0 };
  state.bugs = [];
  state.deployed = false;
  state.levelBugsFixed = 0;
  state.target = null;
  state.invincibleUntil = 0;
  state.elapsed = 0;
  state.keys.clear();
  spawnBugs(state);
}

export function createDevArenaState(width: number, height: number): DevArenaState {
  const state: DevArenaState = {
    player: { x: width * 0.12, y: height * 0.5 },
    velocity: { x: 0, y: 0 },
    bugs: [],
    obstacles: [],
    hazards: [],
    deployZone: { x: 0, y: 0, w: 0, h: 0 },
    score: 0,
    lives: START_LIVES,
    timeLeft: LEVELS[0]!.timeLimit,
    phase: "ready",
    deployed: false,
    levelBugsFixed: 0,
    bugsRequired: LEVELS[0]!.bugsRequired,
    level: 1,
    levelName: LEVELS[0]!.name,
    playerSpeed: LEVELS[0]!.playerSpeed,
    maxBugsOnField: Math.min(LEVELS[0]!.bugsRequired, MAX_BUGS_VISIBLE),
    keys: new Set(),
    target: null,
    width,
    height,
    portrait: false,
    nextBugId: 0,
    invincibleUntil: 0,
    elapsed: 0,
    statusLine: "Press Space or tap to start · 5 levels · fix bugs and deploy"
  };

  applyLevelLayout(state, 1);
  spawnBugs(state);
  return state;
}

export function resizeDevArenaState(state: DevArenaState, width: number, height: number) {
  state.width = width;
  state.height = height;
  applyLevelLayout(state, state.level);
  state.player = findSafePlayerSpawn(state);
  repositionBugs(state);
}

export function startDevArenaRound(state: DevArenaState) {
  state.score = 0;
  state.lives = START_LIVES;
  state.level = 1;
  state.keys.clear();
  state.phase = "playing";
  state.statusLine = `Level 1 · ${LEVELS[0]!.name} · Fix ${LEVELS[0]!.bugsRequired} bugs and deploy`;
  applyLevelLayout(state, 1);
  resetLevelProgress(state);
}

export function advanceDevArenaLevel(state: DevArenaState) {
  if (state.level >= MAX_LEVEL) {
    state.phase = "victory";
    state.velocity = { x: 0, y: 0 };
    state.target = null;
    state.statusLine = "All levels cleared! You shipped the whole stack.";
    return;
  }

  state.level += 1;
  const config = getLevelConfig(state.level);
  state.phase = "playing";
  state.statusLine = `Level ${state.level} · ${config.name} · Fix ${config.bugsRequired} bugs and deploy`;
  applyLevelLayout(state, state.level);
  resetLevelProgress(state);
}

export function setDevArenaTarget(state: DevArenaState, x: number, y: number) {
  if (state.phase !== "playing") return;
  state.target = { x, y };
}

function clampPlayer(state: DevArenaState) {
  const bounds = getPlayableBounds(state);
  state.player.x = clamp(state.player.x, bounds.left + PLAYER_RADIUS, bounds.right - PLAYER_RADIUS);
  state.player.y = clamp(state.player.y, bounds.top + PLAYER_RADIUS, bounds.bottom - PLAYER_RADIUS);
}

function resolveObstacleCollisions(state: DevArenaState) {
  for (const obstacle of state.obstacles) {
    const resolved = resolveCircleRect(state.player.x, state.player.y, PLAYER_RADIUS, obstacle);
    state.player.x = resolved.x;
    state.player.y = resolved.y;
  }
}

function updateHazards(state: DevArenaState, deltaSeconds: number) {
  const bounds = getPlayableBounds(state);

  for (const hazard of state.hazards) {
    hazard.x += hazard.vx * deltaSeconds;
    hazard.y += hazard.vy * deltaSeconds;

    const minX = bounds.left + hazard.radius;
    const maxX = bounds.right - hazard.radius;
    const minY = bounds.top + hazard.radius;
    const maxY = bounds.bottom - hazard.radius;

    if (hazard.x < minX || hazard.x > maxX) {
      hazard.vx *= -1;
      hazard.x = clamp(hazard.x, minX, maxX);
    }

    if (hazard.y < minY || hazard.y > maxY) {
      hazard.vy *= -1;
      hazard.y = clamp(hazard.y, minY, maxY);
    }
  }
}

function failRun(state: DevArenaState, message: string) {
  state.phase = "over";
  state.velocity = { x: 0, y: 0 };
  state.target = null;
  state.statusLine = message;
}

function hitHazard(state: DevArenaState, now: number) {
  if (now < state.invincibleUntil) return;

  state.lives -= 1;
  state.invincibleUntil = now + INVINCIBLE_MS;
  state.statusLine = "Outage hit! Dodge the pager and incidents.";

  if (state.lives <= 0) {
    failRun(state, `Production down on Level ${state.level}. Press Space to retry.`);
  }
}

function levelObjectivesMet(state: DevArenaState) {
  return state.deployed && state.levelBugsFixed >= state.bugsRequired;
}

function completeLevel(state: DevArenaState) {
  const timeBonus = Math.floor(state.timeLeft) * TIME_BONUS_PER_SECOND;
  state.score += timeBonus;
  state.velocity = { x: 0, y: 0 };
  state.target = null;
  state.keys.clear();

  if (state.level >= MAX_LEVEL) {
    state.phase = "victory";
    state.statusLine = `Final level cleared · +${timeBonus} time bonus · You win!`;
    return;
  }

  state.phase = "levelComplete";
  state.statusLine = `Level ${state.level} cleared · +${timeBonus} bonus · Next level starting…`;
}

function collectBugs(state: DevArenaState) {
  let collected = false;

  state.bugs = state.bugs.filter((bug) => {
    const hit =
      Math.hypot(state.player.x - bug.x, state.player.y - bug.y) < PLAYER_RADIUS + BUG_RADIUS;

    if (hit) {
      collected = true;
      state.score += BUG_POINTS;
      state.levelBugsFixed += 1;
      state.statusLine = `Bug fixed ${state.levelBugsFixed}/${state.bugsRequired} · +${BUG_POINTS} pts`;

      if (levelObjectivesMet(state)) {
        completeLevel(state);
      }
    }

    return !hit;
  });

  if (collected && state.phase === "playing" && !levelObjectivesMet(state)) {
    spawnBugs(state);
  }
}

function tryDeploy(state: DevArenaState) {
  if (state.deployed) return;

  const zone = state.deployZone;
  const inZone =
    state.player.x + PLAYER_RADIUS > zone.x &&
    state.player.x - PLAYER_RADIUS < zone.x + zone.w &&
    state.player.y + PLAYER_RADIUS > zone.y &&
    state.player.y - PLAYER_RADIUS < zone.y + zone.h;

  if (!inZone) return;

  state.deployed = true;
  state.score += DEPLOY_POINTS;
  state.statusLine = `Deployed to prod · +${DEPLOY_POINTS} pts · ${state.levelBugsFixed}/${state.bugsRequired} bugs`;

  if (levelObjectivesMet(state)) {
    completeLevel(state);
  }
}

function endLevelOnTimeout(state: DevArenaState) {
  const remaining = state.bugsRequired - state.levelBugsFixed;
  const deployHint = state.deployed ? "" : " and deploy to prod";

  if (remaining > 0) {
    failRun(
      state,
      `Level ${state.level} failed · ${remaining} bug${remaining === 1 ? "" : "s"} left${deployHint}. Press Space to retry.`
    );
    return;
  }

  if (!state.deployed) {
    failRun(
      state,
      `Level ${state.level} failed · reach PROD before time runs out. Press Space to retry.`
    );
  }
}

export function updateDevArenaState(state: DevArenaState, deltaSeconds: number, now: number) {
  if (state.phase !== "playing") return;

  state.elapsed += deltaSeconds;

  const { player, velocity, keys, playerSpeed } = state;
  let inputX = 0;
  let inputY = 0;

  if (keys.has("ArrowLeft") || keys.has("a") || keys.has("A")) inputX -= 1;
  if (keys.has("ArrowRight") || keys.has("d") || keys.has("D")) inputX += 1;
  if (keys.has("ArrowUp") || keys.has("w") || keys.has("W")) inputY -= 1;
  if (keys.has("ArrowDown") || keys.has("s") || keys.has("S")) inputY += 1;

  if (inputX !== 0 || inputY !== 0) {
    state.target = null;
    const length = Math.hypot(inputX, inputY) || 1;
    velocity.x = (inputX / length) * playerSpeed;
    velocity.y = (inputY / length) * playerSpeed;
  } else if (state.target) {
    const dx = state.target.x - player.x;
    const dy = state.target.y - player.y;
    const distance = Math.hypot(dx, dy);

    if (distance < 6) {
      state.target = null;
      velocity.x = 0;
      velocity.y = 0;
    } else {
      velocity.x = (dx / distance) * playerSpeed;
      velocity.y = (dy / distance) * playerSpeed;
    }
  } else {
    velocity.x *= FRICTION;
    velocity.y *= FRICTION;
    if (Math.abs(velocity.x) < 2) velocity.x = 0;
    if (Math.abs(velocity.y) < 2) velocity.y = 0;
  }

  player.x += velocity.x * deltaSeconds;
  player.y += velocity.y * deltaSeconds;
  clampPlayer(state);
  resolveObstacleCollisions(state);
  clampPlayer(state);

  updateHazards(state, deltaSeconds);

  for (const hazard of state.hazards) {
    if (Math.hypot(player.x - hazard.x, player.y - hazard.y) < PLAYER_RADIUS + hazard.radius - 2) {
      hitHazard(state, now);
      break;
    }
  }

  if (state.phase !== "playing") return;

  collectBugs(state);
  if (state.phase !== "playing") return;

  tryDeploy(state);
  if (state.phase !== "playing") return;

  state.timeLeft = Math.max(0, state.timeLeft - deltaSeconds);

  if (state.timeLeft <= 0) {
    if (levelObjectivesMet(state)) {
      completeLevel(state);
    } else {
      endLevelOnTimeout(state);
    }
  }
}

export function isDevArenaSimulating(state: DevArenaState) {
  return state.phase === "playing";
}

export function canAdvanceDevArena(state: DevArenaState) {
  return state.phase === "levelComplete" || state.phase === "victory" || state.phase === "over";
}

export function canStartDevArena(state: DevArenaState) {
  return state.phase === "ready" || state.phase === "over";
}

export function continueDevArena(state: DevArenaState) {
  if (state.phase === "levelComplete") {
    advanceDevArenaLevel(state);
    return;
  }

  if (state.phase === "victory" || state.phase === "over") {
    startDevArenaRound(state);
  }
}

export function getDevArenaHud(state: DevArenaState): DevArenaHud {
  return {
    score: state.score,
    levelBugsFixed: state.levelBugsFixed,
    bugsRequired: state.bugsRequired,
    bugsOnField: state.bugs.length,
    timeLeft: state.timeLeft,
    lives: state.lives,
    phase: state.phase,
    deployed: state.deployed,
    level: state.level,
    maxLevel: MAX_LEVEL,
    levelName: state.levelName,
    statusLine: state.statusLine
  };
}

type DrawColors = {
  grid: string;
  playerFill: string;
  playerRing: string;
  bug: string;
  bugGlow: string;
  bugStroke: string;
  bugLabel: string;
  hazard: string;
  hazardGlow: string;
  obstacle: string;
  obstacleText: string;
  deploy: string;
  deployText: string;
  text: string;
  overlay: string;
  destructive: string;
};

export function drawDevArena(
  ctx: CanvasRenderingContext2D,
  state: DevArenaState,
  colors: DrawColors,
  pixelRatio: number,
  now: number
) {
  const { width, height } = state;
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  ctx.clearRect(0, 0, width, height);

  drawGrid(ctx, width, height, colors.grid);
  drawLevelBadge(ctx, state, colors);
  drawDeployZone(ctx, state.deployZone, colors, state.deployed, state.portrait);

  for (const obstacle of state.obstacles) {
    drawObstacle(ctx, obstacle, colors);
  }

  for (const hazard of state.hazards) {
    drawHazard(ctx, hazard, colors, now);
  }

  for (const bug of state.bugs) {
    drawBug(ctx, bug, colors, now);
  }

  if (state.target && state.phase === "playing") {
    ctx.beginPath();
    ctx.arc(state.target.x, state.target.y, 4, 0, Math.PI * 2);
    ctx.strokeStyle = colors.playerRing;
    ctx.globalAlpha = 0.45;
    ctx.stroke();
    ctx.globalAlpha = 1;
  }

  drawPlayer(ctx, state, colors, now);

  if (state.phase !== "playing") {
    drawPhaseOverlay(ctx, width, height, colors, state);
  }
}

function drawLevelBadge(ctx: CanvasRenderingContext2D, state: DevArenaState, colors: DrawColors) {
  ctx.fillStyle = colors.obstacle;
  ctx.globalAlpha = 0.85;
  ctx.fillRect(PADDING, PADDING, 92, 22);
  ctx.globalAlpha = 1;

  ctx.fillStyle = colors.text;
  ctx.font = "600 10px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText(`L${state.level} ${state.levelName}`, PADDING + 8, PADDING + 11);
}

function drawDeployZone(
  ctx: CanvasRenderingContext2D,
  zone: DeployZone,
  colors: DrawColors,
  deployed: boolean,
  portrait: boolean
) {
  ctx.fillStyle = colors.deploy;
  ctx.globalAlpha = deployed ? 0.12 : 0.22;
  ctx.fillRect(zone.x, zone.y, zone.w, zone.h);
  ctx.globalAlpha = 1;

  ctx.strokeStyle = colors.deployText;
  ctx.globalAlpha = deployed ? 0.35 : 0.75;
  ctx.setLineDash([5, 4]);
  ctx.strokeRect(zone.x + 1, zone.y + 1, zone.w - 2, zone.h - 2);
  ctx.setLineDash([]);
  ctx.globalAlpha = 1;

  ctx.fillStyle = colors.deployText;
  ctx.font = "700 10px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.globalAlpha = deployed ? 0.45 : 0.9;

  if (portrait) {
    ctx.fillText(
      deployed ? "LIVE · SHIPPED" : "DEPLOY TO PROD",
      zone.x + zone.w / 2,
      zone.y + zone.h / 2
    );
  } else {
    ctx.save();
    ctx.translate(zone.x + zone.w / 2, zone.y + zone.h / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(deployed ? "LIVE" : "PROD", 0, 0);
    ctx.restore();
  }

  ctx.globalAlpha = 1;
}

function drawFittedLabel(
  ctx: CanvasRenderingContext2D,
  label: string,
  centerX: number,
  centerY: number,
  maxWidth: number,
  maxSize = 9,
  minSize = 6
) {
  let fontSize = maxSize;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  while (fontSize >= minSize) {
    ctx.font = `600 ${fontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;
    if (ctx.measureText(label).width <= maxWidth) break;
    fontSize -= 1;
  }

  ctx.fillText(label, centerX, centerY);
}

function drawObstacle(ctx: CanvasRenderingContext2D, obstacle: Obstacle, colors: DrawColors) {
  ctx.fillStyle = colors.obstacle;
  ctx.globalAlpha = 0.92;
  ctx.fillRect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
  ctx.globalAlpha = 1;

  ctx.strokeStyle = colors.grid;
  ctx.strokeRect(obstacle.x + 0.5, obstacle.y + 0.5, obstacle.w - 1, obstacle.h - 1);

  ctx.fillStyle = colors.obstacleText;
  drawFittedLabel(
    ctx,
    obstacle.label,
    obstacle.x + obstacle.w / 2,
    obstacle.y + obstacle.h / 2,
    obstacle.w - 8
  );
}

function drawHazard(
  ctx: CanvasRenderingContext2D,
  hazard: Hazard,
  colors: DrawColors,
  now: number
) {
  const pulse = 1 + Math.sin(now * 0.008) * 0.12;

  ctx.beginPath();
  ctx.arc(hazard.x, hazard.y, hazard.radius * pulse + 4, 0, Math.PI * 2);
  ctx.fillStyle = colors.hazardGlow;
  ctx.globalAlpha = 0.25;
  ctx.fill();
  ctx.globalAlpha = 1;

  ctx.beginPath();
  ctx.arc(hazard.x, hazard.y, hazard.radius * pulse, 0, Math.PI * 2);
  ctx.fillStyle = colors.hazard;
  ctx.fill();

  ctx.fillStyle = colors.obstacleText;
  drawFittedLabel(ctx, hazard.label, hazard.x, hazard.y + 0.5, hazard.radius * 1.7, 7, 5);
}

function drawBug(ctx: CanvasRenderingContext2D, bug: Bug, colors: DrawColors, now: number) {
  const pulse = 1 + Math.sin(now * 0.012 + bug.id) * 0.15;
  const radius = BUG_RADIUS * pulse;

  ctx.beginPath();
  ctx.arc(bug.x, bug.y, radius + 6, 0, Math.PI * 2);
  ctx.fillStyle = colors.bugGlow;
  ctx.globalAlpha = 0.45;
  ctx.fill();
  ctx.globalAlpha = 1;

  ctx.beginPath();
  ctx.arc(bug.x, bug.y, radius, 0, Math.PI * 2);
  ctx.fillStyle = colors.bug;
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = colors.bugStroke;
  ctx.stroke();

  ctx.fillStyle = colors.bugLabel;
  ctx.font = "700 9px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("bug", bug.x, bug.y + 0.5);
}

function drawPlayer(
  ctx: CanvasRenderingContext2D,
  state: DevArenaState,
  colors: DrawColors,
  now: number
) {
  const { player, velocity } = state;
  const flashing = now < state.invincibleUntil && Math.floor(now / 100) % 2 === 0;

  if (flashing) return;

  ctx.beginPath();
  ctx.arc(player.x, player.y, PLAYER_RADIUS, 0, Math.PI * 2);
  ctx.fillStyle = colors.playerFill;
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = colors.playerRing;
  ctx.stroke();

  ctx.fillStyle = colors.text;
  ctx.font = "600 11px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("AN", player.x, player.y + 0.5);

  if (Math.abs(velocity.x) > 10 || Math.abs(velocity.y) > 10) {
    ctx.beginPath();
    ctx.moveTo(player.x, player.y);
    ctx.lineTo(player.x - velocity.x * 0.04, player.y - velocity.y * 0.04);
    ctx.strokeStyle = colors.playerRing;
    ctx.globalAlpha = 0.35;
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
}

function drawPhaseOverlay(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  colors: DrawColors,
  state: DevArenaState
) {
  ctx.fillStyle = colors.overlay;
  ctx.globalAlpha = state.phase === "ready" ? 0.35 : 0.55;
  ctx.fillRect(0, 0, width, height);
  ctx.globalAlpha = 1;

  ctx.fillStyle = colors.text;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  if (state.phase === "ready") {
    ctx.font = "700 15px ui-monospace, SFMono-Regular, Menlo, monospace";
    ctx.fillText("Ship Sprint", width / 2, height / 2 - 24);
    ctx.font = "500 11px ui-monospace, SFMono-Regular, Menlo, monospace";
    ctx.fillText("5 levels · fix bugs · ship the sprint", width / 2, height / 2 - 4);
    ctx.fillText("Space / tap to start", width / 2, height / 2 + 16);
    return;
  }

  if (state.phase === "levelComplete") {
    ctx.font = "700 14px ui-monospace, SFMono-Regular, Menlo, monospace";
    ctx.fillText(`Level ${state.level} cleared`, width / 2, height / 2 - 18);
    ctx.font = "600 12px ui-monospace, SFMono-Regular, Menlo, monospace";
    ctx.fillText(`Score ${state.score}`, width / 2, height / 2 + 2);
    ctx.font = "500 11px ui-monospace, SFMono-Regular, Menlo, monospace";
    ctx.fillText("Loading next level…", width / 2, height / 2 + 22);
    return;
  }

  if (state.phase === "victory") {
    ctx.font = "700 14px ui-monospace, SFMono-Regular, Menlo, monospace";
    ctx.fillText("All levels shipped!", width / 2, height / 2 - 18);
    ctx.font = "600 12px ui-monospace, SFMono-Regular, Menlo, monospace";
    ctx.fillText(`Final score ${state.score}`, width / 2, height / 2 + 2);
    ctx.font = "500 11px ui-monospace, SFMono-Regular, Menlo, monospace";
    ctx.fillText("Space to play again", width / 2, height / 2 + 22);
    return;
  }

  ctx.font = "700 14px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("Run ended", width / 2, height / 2 - 20);
  ctx.font = "600 12px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText(`Level ${state.level} · Score ${state.score}`, width / 2, height / 2 + 2);
  ctx.font = "500 11px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("Space to retry from Level 1", width / 2, height / 2 + 22);
}

function drawGrid(ctx: CanvasRenderingContext2D, width: number, height: number, color: string) {
  const step = ARENA_GRID_STEP;
  ctx.strokeStyle = color;
  ctx.globalAlpha = 0.4;
  ctx.lineWidth = 1;
  ctx.beginPath();

  for (let x = 0; x <= width; x += step) {
    ctx.moveTo(x + 0.5, 0);
    ctx.lineTo(x + 0.5, height);
  }

  for (let y = 0; y <= height; y += step) {
    ctx.moveTo(0, y + 0.5);
    ctx.lineTo(width, y + 0.5);
  }

  ctx.stroke();
  ctx.globalAlpha = 1;
}

let cachedArenaState: DevArenaState | null = null;
let cachedArenaWidth = 0;
let cachedArenaHeight = 0;

/** Keeps in-progress runs alive across React remounts (e.g. dev Fast Refresh). */
export function cacheDevArenaState(state: DevArenaState) {
  cachedArenaState = state;
  cachedArenaWidth = state.width;
  cachedArenaHeight = state.height;
}

export function restoreDevArenaState(width: number, height: number): DevArenaState | null {
  if (!cachedArenaState || cachedArenaWidth !== width || cachedArenaHeight !== height) {
    return null;
  }

  const state = cachedArenaState;
  cachedArenaState = null;
  return state;
}
