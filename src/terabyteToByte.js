/** Convert a finite measurement from terabyte to byte. */
export function terabyteToByte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000000000000) / 1;
}
