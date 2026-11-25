/** Convert a finite measurement from pound to milligram. */
export function poundToMilligram(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 453.59237) / 0.001;
}
