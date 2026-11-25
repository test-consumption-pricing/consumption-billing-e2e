/** Convert a finite measurement from gigabyte to tebibyte. */
export function gigabyteToTebibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000000000) / 1099511627776;
}
