/** Convert a finite measurement from meter to centimeter. */
export function meterToCentimeter(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 0.01;
}
