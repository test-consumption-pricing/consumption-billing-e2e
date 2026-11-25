/** Convert a finite measurement from milligram to gram. */
export function milligramToGram(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.001) / 1;
}
