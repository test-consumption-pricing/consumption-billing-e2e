/** Convert a finite measurement from inch to meter. */
export function inchToMeter(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.0254) / 1;
}
