/** Convert a finite measurement from hour to second. */
export function hourToSecond(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 3600) / 1;
}
