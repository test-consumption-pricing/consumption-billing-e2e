/** Convert a finite measurement from inch to millimeter. */
export function inchToMillimeter(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.0254) / 0.001;
}
