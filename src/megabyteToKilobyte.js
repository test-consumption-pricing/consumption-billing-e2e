/** Convert a finite measurement from megabyte to kilobyte. */
export function megabyteToKilobyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000000) / 1000;
}
