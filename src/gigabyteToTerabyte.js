/** Convert a finite measurement from gigabyte to terabyte. */
export function gigabyteToTerabyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000000000) / 1000000000000;
}
