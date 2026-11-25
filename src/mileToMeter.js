/** Convert a finite measurement from mile to meter. */
export function mileToMeter(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1609.344) / 1;
}
