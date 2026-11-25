/** Convert a finite measurement from millisecond to minute. */
export function millisecondToMinute(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.001) / 60;
}
