/** Convert a finite measurement from centimeter to inch. */
export function centimeterToInch(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.01) / 0.0254;
}
