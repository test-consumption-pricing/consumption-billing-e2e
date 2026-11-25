/** Convert a finite measurement from kilometer to mile. */
export function kilometerToMile(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000) / 1609.344;
}
