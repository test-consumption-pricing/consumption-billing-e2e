/** Convert a finite measurement from yard to foot. */
export function yardToFoot(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.9144) / 0.3048;
}
