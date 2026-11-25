/** Convert a finite measurement from kilometer to yard. */
export function kilometerToYard(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000) / 0.9144;
}
