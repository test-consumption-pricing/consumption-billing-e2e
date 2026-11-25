/** Convert a finite measurement from foot to yard. */
export function footToYard(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.3048) / 0.9144;
}
