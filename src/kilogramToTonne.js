/** Convert a finite measurement from kilogram to tonne. */
export function kilogramToTonne(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000) / 1000000;
}
