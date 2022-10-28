export default function _asyncSleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
