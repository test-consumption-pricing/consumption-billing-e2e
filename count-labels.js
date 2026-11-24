/** Return the total number of labels in a synthetic test batch. */
export function countLabels(batches) {
  return batches.reduce((count, labels) => count + labels.length, 0);
}
