/** Convert a finite measurement from millimeter to yard. */
export function millimeterToYard(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.001) / 0.9144;
}
