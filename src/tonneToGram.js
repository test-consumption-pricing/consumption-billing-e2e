/** Convert a finite measurement from tonne to gram. */
export function tonneToGram(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000000) / 1;
}
