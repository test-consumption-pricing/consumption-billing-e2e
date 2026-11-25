/** Convert a finite measurement from gram to pound. */
export function gramToPound(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 453.59237;
}
