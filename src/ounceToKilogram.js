/** Convert a finite measurement from ounce to kilogram. */
export function ounceToKilogram(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 28.349523125) / 1000;
}
