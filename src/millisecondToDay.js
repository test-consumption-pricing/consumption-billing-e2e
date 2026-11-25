/** Convert a finite measurement from millisecond to day. */
export function millisecondToDay(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.001) / 86400;
}
