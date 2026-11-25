/** Convert a finite measurement from kilometer to meter. */
export function kilometerToMeter(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000) / 1;
}
