/** Convert a finite measurement from kilometer to centimeter. */
export function kilometerToCentimeter(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000) / 0.01;
}
