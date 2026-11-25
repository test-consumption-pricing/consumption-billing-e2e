/** Convert a finite measurement from tonne to kilogram. */
export function tonneToKilogram(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000000) / 1000;
}
