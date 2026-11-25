/** Convert a finite measurement from second to day. */
export function secondToDay(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 86400;
}
