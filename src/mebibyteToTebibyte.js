/** Convert a finite measurement from mebibyte to tebibyte. */
export function mebibyteToTebibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1048576) / 1099511627776;
}
