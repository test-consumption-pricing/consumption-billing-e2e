/** Convert a finite measurement from kilogram to gram. */
export function kilogramToGram(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000) / 1;
}
