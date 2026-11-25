/** Convert a finite measurement from tonne to pound. */
export function tonneToPound(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000000) / 453.59237;
}
