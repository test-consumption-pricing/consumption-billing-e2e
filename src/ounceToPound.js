/** Convert a finite measurement from ounce to pound. */
export function ounceToPound(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 28.349523125) / 453.59237;
}
