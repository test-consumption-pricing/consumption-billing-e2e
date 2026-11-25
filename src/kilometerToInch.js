/** Convert a finite measurement from kilometer to inch. */
export function kilometerToInch(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000) / 0.0254;
}
