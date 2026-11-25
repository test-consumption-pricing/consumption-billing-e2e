/** Convert a finite measurement from yard to kilometer. */
export function yardToKilometer(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.9144) / 1000;
}
