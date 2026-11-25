/** Convert a finite measurement from hour to day. */
export function hourToDay(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 3600) / 86400;
}
