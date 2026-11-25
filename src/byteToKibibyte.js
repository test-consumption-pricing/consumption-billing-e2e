/** Convert a finite measurement from byte to kibibyte. */
export function byteToKibibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 1024;
}
