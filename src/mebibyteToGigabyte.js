/** Convert a finite measurement from mebibyte to gigabyte. */
export function mebibyteToGigabyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1048576) / 1000000000;
}
