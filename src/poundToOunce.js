/** Convert a finite measurement from pound to ounce. */
export function poundToOunce(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 453.59237) / 28.349523125;
}
