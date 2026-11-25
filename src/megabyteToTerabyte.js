/** Convert a finite measurement from megabyte to terabyte. */
export function megabyteToTerabyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000000) / 1000000000000;
}
