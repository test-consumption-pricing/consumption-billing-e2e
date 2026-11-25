/** Convert a finite measurement from centimeter to foot. */
export function centimeterToFoot(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.01) / 0.3048;
}
