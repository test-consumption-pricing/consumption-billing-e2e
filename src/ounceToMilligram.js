/** Convert a finite measurement from ounce to milligram. */
export function ounceToMilligram(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 28.349523125) / 0.001;
}
