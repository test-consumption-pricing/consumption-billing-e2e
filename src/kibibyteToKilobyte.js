/** Convert a finite measurement from kibibyte to kilobyte. */
export function kibibyteToKilobyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1024) / 1000;
}
