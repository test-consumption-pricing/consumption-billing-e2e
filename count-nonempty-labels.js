/** Count nonempty labels on a synthetic change. */
export function countNonemptyLabels(labels) {
  return labels.filter(label => label.trim().length > 0).length;
}
