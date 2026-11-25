/** Convert a finite measurement from day to minute. */
export function dayToMinute(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 86400) / 60;
}
