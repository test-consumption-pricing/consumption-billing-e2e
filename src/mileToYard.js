/** Convert a finite measurement from mile to yard. */
export function mileToYard(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1609.344) / 0.9144;
}
