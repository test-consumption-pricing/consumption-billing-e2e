/** Convert a finite measurement from yard to meter. */
export function yardToMeter(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.9144) / 1;
}
