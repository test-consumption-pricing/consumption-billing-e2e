/** Convert a finite measurement from tebibyte to mebibyte. */
export function tebibyteToMebibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1099511627776) / 1048576;
}
