/** Convert a finite measurement from meter to foot. */
export function meterToFoot(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 0.3048;
}
