/** Convert a finite measurement from inch to yard. */
export function inchToYard(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.0254) / 0.9144;
}
