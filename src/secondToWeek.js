/** Convert a finite measurement from second to week. */
export function secondToWeek(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 604800;
}
