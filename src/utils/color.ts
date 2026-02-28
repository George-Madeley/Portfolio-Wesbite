function hexToRgba(hex: string) {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    // #RGB
    hex = hex
      .split("")
      .map((x) => x + x)
      .join("");
  }
  if (hex.length === 6) hex += "ff"; // add alpha if missing

  const num = parseInt(hex, 16);
  return {
    r: (num >> 24) & 0xff,
    g: (num >> 16) & 0xff,
    b: (num >> 8) & 0xff,
    a: num & 0xff,
  };
}

function randomBetween(a: number, b: number, seed: number = Math.random()) {
  return Math.round(a + seed * (b - a));
}

export function interpolateColor(startHex: string, endHex: string) {
  const s = hexToRgba(startHex);
  const e = hexToRgba(endHex);

  const seed = Math.random();

  const r = randomBetween(s.r, e.r, seed);
  const g = randomBetween(s.g, e.g, seed);
  const b = randomBetween(s.b, e.b, seed);
  const a = randomBetween(s.a, e.a, seed);

  return `#${[r, g, b, a].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
}
