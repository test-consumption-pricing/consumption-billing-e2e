/** Convert a finite measurement from gigabyte to mebibyte. */
export function gigabyteToMebibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000000000) / 1048576;
}
