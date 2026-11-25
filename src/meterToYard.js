/** Convert a finite measurement from meter to yard. */
export function meterToYard(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 0.9144;
}
