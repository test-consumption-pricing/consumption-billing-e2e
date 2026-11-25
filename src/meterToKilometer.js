/** Convert a finite measurement from meter to kilometer. */
export function meterToKilometer(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 1000;
}
