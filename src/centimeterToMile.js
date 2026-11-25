/** Convert a finite measurement from centimeter to mile. */
export function centimeterToMile(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.01) / 1609.344;
}
