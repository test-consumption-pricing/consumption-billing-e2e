/** Convert a finite measurement from mebibyte to terabyte. */
export function mebibyteToTerabyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1048576) / 1000000000000;
}
