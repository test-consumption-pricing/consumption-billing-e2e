/** Convert a finite measurement from gigabyte to megabyte. */
export function gigabyteToMegabyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000000000) / 1000000;
}
