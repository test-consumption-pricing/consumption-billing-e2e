/** Convert a finite measurement from yard to mile. */
export function yardToMile(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.9144) / 1609.344;
}
