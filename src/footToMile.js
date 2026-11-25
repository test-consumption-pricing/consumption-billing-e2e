/** Convert a finite measurement from foot to mile. */
export function footToMile(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.3048) / 1609.344;
}
