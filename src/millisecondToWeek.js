/** Convert a finite measurement from millisecond to week. */
export function millisecondToWeek(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.001) / 604800;
}
