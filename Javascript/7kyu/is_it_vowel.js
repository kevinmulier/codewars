String.prototype.vowel = function () {
  return "aeiou".includes(this.toLowerCase()) && this.length === 1;
};
