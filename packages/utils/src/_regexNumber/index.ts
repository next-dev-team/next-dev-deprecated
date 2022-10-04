/**
 * Reference:
 * https://github.com/dunizb/JS-Regular-expression-awesome/blob/master/README.md
 */

const _regexNumber = {
  numbers: /^[0-9]*$/,
  digits: /^\d{n}$/,
  atLeastDigits: /^\d{n,}$/,
  /**
   * Validate zero and non-zero leading numbers
   */
  zeroNonZeroLeading: /^(0|[1-9][0-9]*)$/,
  /**
   *    Validate positive real numbers with two decimal places
   */
  posNumbersTwoDecimal: /^[0-9]+(.[0-9]{2})?$/,
};

export default _regexNumber;
