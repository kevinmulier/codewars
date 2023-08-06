String.prototype.digit = function () {
  let regex = /\d/i;
  return regex.test(this) && this.length == 1;
};

// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
