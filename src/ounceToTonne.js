/** Convert a finite measurement from ounce to tonne. */
export function ounceToTonne(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 28.349523125) / 1000000;
}
