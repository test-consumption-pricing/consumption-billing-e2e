/** Convert a finite measurement from second to hour. */
export function secondToHour(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 3600;
}
