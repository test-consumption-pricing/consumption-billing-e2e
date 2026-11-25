/** Convert a finite measurement from megabyte to mebibyte. */
export function megabyteToMebibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000000) / 1048576;
}
