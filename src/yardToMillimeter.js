/** Convert a finite measurement from yard to millimeter. */
export function yardToMillimeter(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.9144) / 0.001;
}
