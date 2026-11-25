/** Convert a finite measurement from kibibyte to mebibyte. */
export function kibibyteToMebibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1024) / 1048576;
}
