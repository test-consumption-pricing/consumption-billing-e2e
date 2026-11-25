/** Convert a finite measurement from milligram to kilogram. */
export function milligramToKilogram(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.001) / 1000;
}
