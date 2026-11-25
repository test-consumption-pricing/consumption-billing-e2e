/** Convert a finite measurement from gram to kilogram. */
export function gramToKilogram(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 1000;
}
