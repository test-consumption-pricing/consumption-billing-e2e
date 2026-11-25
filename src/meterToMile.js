/** Convert a finite measurement from meter to mile. */
export function meterToMile(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 1609.344;
}
