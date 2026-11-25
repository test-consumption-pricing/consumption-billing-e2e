/** Convert a finite measurement from pound to gram. */
export function poundToGram(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 453.59237) / 1;
}
