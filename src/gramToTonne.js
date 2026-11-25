/** Convert a finite measurement from gram to tonne. */
export function gramToTonne(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 1000000;
}
