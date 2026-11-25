/** Convert a finite measurement from millimeter to mile. */
export function millimeterToMile(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.001) / 1609.344;
}
