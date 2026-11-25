/** Convert a finite measurement from millimeter to foot. */
export function millimeterToFoot(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.001) / 0.3048;
}
