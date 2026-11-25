/** Convert a finite measurement from kilogram to ounce. */
export function kilogramToOunce(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000) / 28.349523125;
}
