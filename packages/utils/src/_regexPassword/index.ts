const _regexPassword = {
  atLeastTwoSpecialCharacters: /(?=.*[!@#$&*])/,
  atLeastTwoLowerCaseLetters: /(?=.*[a-z].*[a-z])/,
  atLeastTwoUpperCaseLetters: /(?=.*[A-Z].*[A-Z])/,
  atLeastTwoNumber: /(?=.*[0-9].*[0-9])/,
};

export default _regexPassword;
