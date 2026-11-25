/** Convert a finite measurement from inch to mile. */
export function inchToMile(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.0254) / 1609.344;
}
