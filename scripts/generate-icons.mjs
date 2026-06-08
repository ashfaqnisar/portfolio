import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { createCanvas } from "@napi-rs/canvas";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "../public");

const COLORS = {
  background: "#09090b",
  badgeFill: "rgba(16, 185, 129, 0.18)",
  badgeStroke: "rgba(16, 185, 129, 0.45)",
  text: "#34d399",
  textSmall: "#6ee7b7"
};

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function drawCenteredText(ctx, text, size, fontSize) {
  ctx.font = `700 ${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const nudgeUp = size <= 16 ? 1.2 : size <= 32 ? 2.5 : 8;
  ctx.fillText(text, size / 2, size / 2 - nudgeUp);
}

function createIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext("2d");

  const outerRadius = size <= 16 ? 3 : size <= 32 ? 6 : 24;
  const padding = size <= 16 ? 1 : size <= 32 ? 2 : 36;
  const fontSize = size <= 16 ? 8 : size <= 32 ? 18 : 48;
  const innerRadius = Math.max(outerRadius - 1, 2);
  const innerSize = size - padding * 2;

  ctx.fillStyle = COLORS.background;
  drawRoundedRect(ctx, 0, 0, size, size, outerRadius);
  ctx.fill();

  ctx.fillStyle = size <= 16 ? "rgba(16, 185, 129, 0.22)" : COLORS.badgeFill;
  ctx.strokeStyle = size <= 16 ? "rgba(52, 211, 153, 0.55)" : COLORS.badgeStroke;
  ctx.lineWidth = size <= 16 ? 0.75 : size <= 32 ? 1 : 2;
  drawRoundedRect(ctx, padding, padding, innerSize, innerSize, innerRadius);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = size <= 16 ? COLORS.textSmall : COLORS.text;
  drawCenteredText(ctx, "AN", size, fontSize);

  return canvas.toBuffer("image/png");
}

async function writePng(name, size) {
  const png = createIcon(size);
  const output = path.join(publicDir, name);
  await writeFile(output, png);
  console.log(`Generated ${name} (${size}x${size})`);
}

await mkdir(publicDir, { recursive: true });
await Promise.all([
  writePng("favicon-16x16.png", 16),
  writePng("favicon-32x32.png", 32),
  writePng("apple-icon.png", 180)
]);

console.log("Icons generated with measured text centering");
