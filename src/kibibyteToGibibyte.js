/** Convert a finite measurement from kibibyte to gibibyte. */
export function kibibyteToGibibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1024) / 1073741824;
}
