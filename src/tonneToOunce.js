/** Convert a finite measurement from tonne to ounce. */
export function tonneToOunce(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000000) / 28.349523125;
}
