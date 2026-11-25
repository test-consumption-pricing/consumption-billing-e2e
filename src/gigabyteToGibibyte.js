/** Convert a finite measurement from gigabyte to gibibyte. */
export function gigabyteToGibibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000000000) / 1073741824;
}
