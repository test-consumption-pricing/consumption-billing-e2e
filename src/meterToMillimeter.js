/** Convert a finite measurement from meter to millimeter. */
export function meterToMillimeter(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 0.001;
}
