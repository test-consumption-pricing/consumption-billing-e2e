/** Convert a finite measurement from centimeter to yard. */
export function centimeterToYard(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.01) / 0.9144;
}
