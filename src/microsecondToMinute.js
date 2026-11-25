/** Convert a finite measurement from microsecond to minute. */
export function microsecondToMinute(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1e-06) / 60;
}
