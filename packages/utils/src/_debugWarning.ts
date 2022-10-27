let warned: Record<string, boolean> = {};

function warning(valid: boolean, message: string) {
  // Support uglify
  if (
    process.env.NODE_ENV !== 'production' &&
    !valid &&
    console !== undefined
  ) {
    console.error(`Warning: ${message}`);
  }
}

function note(valid: boolean, message: string) {
  // Support uglify
  if (
    process.env.NODE_ENV !== 'production' &&
    !valid &&
    console !== undefined
  ) {
    console.warn(`Note: ${message}`);
  }
}

function resetWarned() {
  warned = {};
}

function call(
  method: (valid: boolean, message: string) => void,
  valid: boolean,
  message: string,
) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}

function warningOnce(valid: boolean, message: string) {
  call(warning, valid, message);
}

function noteOnce(valid: boolean, message: string) {
  call(note, valid, message);
}

const _debugWarning = {
  noteOnce,
  warningOnce,
  resetWarned,
  warning,
};
export default _debugWarning;
