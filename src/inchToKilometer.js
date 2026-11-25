/** Convert a finite measurement from inch to kilometer. */
export function inchToKilometer(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.0254) / 1000;
}
