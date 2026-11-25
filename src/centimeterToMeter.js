/** Convert a finite measurement from centimeter to meter. */
export function centimeterToMeter(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.01) / 1;
}
