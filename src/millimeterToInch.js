/** Convert a finite measurement from millimeter to inch. */
export function millimeterToInch(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.001) / 0.0254;
}
