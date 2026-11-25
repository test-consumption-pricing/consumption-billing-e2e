/** Convert a finite measurement from millimeter to kilometer. */
export function millimeterToKilometer(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.001) / 1000;
}
