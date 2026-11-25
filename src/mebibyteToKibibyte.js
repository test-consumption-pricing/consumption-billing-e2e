/** Convert a finite measurement from mebibyte to kibibyte. */
export function mebibyteToKibibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1048576) / 1024;
}
