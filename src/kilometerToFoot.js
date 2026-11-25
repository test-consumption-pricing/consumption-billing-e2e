/** Convert a finite measurement from kilometer to foot. */
export function kilometerToFoot(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000) / 0.3048;
}
