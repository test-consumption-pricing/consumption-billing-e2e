/** Convert a finite measurement from microsecond to week. */
export function microsecondToWeek(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1e-06) / 604800;
}
