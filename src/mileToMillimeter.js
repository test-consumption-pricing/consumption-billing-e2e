/** Convert a finite measurement from mile to millimeter. */
export function mileToMillimeter(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1609.344) / 0.001;
}
