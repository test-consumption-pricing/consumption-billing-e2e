/** Convert a finite measurement from kilometer to millimeter. */
export function kilometerToMillimeter(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000) / 0.001;
}
