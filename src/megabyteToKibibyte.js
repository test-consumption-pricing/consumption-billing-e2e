/** Convert a finite measurement from megabyte to kibibyte. */
export function megabyteToKibibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000000) / 1024;
}
