/** Convert a finite measurement from milliliter to liter. */
export function milliliterToLiter(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.001) / 1;
}
