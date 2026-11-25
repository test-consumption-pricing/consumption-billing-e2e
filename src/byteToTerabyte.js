/** Convert a finite measurement from byte to terabyte. */
export function byteToTerabyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 1000000000000;
}
