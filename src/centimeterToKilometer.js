/** Convert a finite measurement from centimeter to kilometer. */
export function centimeterToKilometer(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.01) / 1000;
}
