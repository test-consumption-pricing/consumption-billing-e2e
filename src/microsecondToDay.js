/** Convert a finite measurement from microsecond to day. */
export function microsecondToDay(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1e-06) / 86400;
}
