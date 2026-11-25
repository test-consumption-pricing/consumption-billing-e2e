/** Convert a finite measurement from gram to ounce. */
export function gramToOunce(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 28.349523125;
}
