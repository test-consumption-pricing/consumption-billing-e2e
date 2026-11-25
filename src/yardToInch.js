/** Convert a finite measurement from yard to inch. */
export function yardToInch(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.9144) / 0.0254;
}
