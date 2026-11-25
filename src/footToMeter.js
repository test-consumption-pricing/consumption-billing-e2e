/** Convert a finite measurement from foot to meter. */
export function footToMeter(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.3048) / 1;
}
