/** Convert a finite measurement from byte to kilobyte. */
export function byteToKilobyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 1000;
}
