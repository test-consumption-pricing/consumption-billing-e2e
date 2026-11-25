/** Convert a finite measurement from tebibyte to gigabyte. */
export function tebibyteToGigabyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1099511627776) / 1000000000;
}
