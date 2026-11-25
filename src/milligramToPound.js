/** Convert a finite measurement from milligram to pound. */
export function milligramToPound(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.001) / 453.59237;
}
