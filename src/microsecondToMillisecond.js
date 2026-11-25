/** Convert a finite measurement from microsecond to millisecond. */
export function microsecondToMillisecond(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1e-06) / 0.001;
}
