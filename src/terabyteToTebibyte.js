/** Convert a finite measurement from terabyte to tebibyte. */
export function terabyteToTebibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000000000000) / 1099511627776;
}
