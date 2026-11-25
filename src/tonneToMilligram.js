/** Convert a finite measurement from tonne to milligram. */
export function tonneToMilligram(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000000) / 0.001;
}
