/** Convert a finite measurement from gram to milligram. */
export function gramToMilligram(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 0.001;
}
