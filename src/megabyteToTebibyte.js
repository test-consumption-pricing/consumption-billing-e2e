/** Convert a finite measurement from megabyte to tebibyte. */
export function megabyteToTebibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000000) / 1099511627776;
}
