/** Convert a finite measurement from milligram to tonne. */
export function milligramToTonne(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.001) / 1000000;
}
