/** Convert a finite measurement from kilogram to pound. */
export function kilogramToPound(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000) / 453.59237;
}
