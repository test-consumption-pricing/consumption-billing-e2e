/** Convert a finite measurement from day to week. */
export function dayToWeek(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 86400) / 604800;
}
