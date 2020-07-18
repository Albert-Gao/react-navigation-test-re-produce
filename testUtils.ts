export function flushMicrotasksQueue() {
  return new Promise((resolve) => setImmediate(resolve));
}
