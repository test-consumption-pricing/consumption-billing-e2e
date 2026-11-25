/** Convert a finite measurement from meter to inch. */
export function meterToInch(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 0.0254;
}
