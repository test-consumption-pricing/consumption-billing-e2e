/** Convert a finite measurement from kibibyte to terabyte. */
export function kibibyteToTerabyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1024) / 1000000000000;
}
