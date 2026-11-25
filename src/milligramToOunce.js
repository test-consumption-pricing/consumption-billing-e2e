/** Convert a finite measurement from milligram to ounce. */
export function milligramToOunce(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.001) / 28.349523125;
}
