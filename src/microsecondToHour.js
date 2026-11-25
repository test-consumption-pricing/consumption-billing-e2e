/** Convert a finite measurement from microsecond to hour. */
export function microsecondToHour(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1e-06) / 3600;
}
