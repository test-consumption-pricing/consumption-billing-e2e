/** Convert a finite measurement from hour to week. */
export function hourToWeek(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 3600) / 604800;
}
