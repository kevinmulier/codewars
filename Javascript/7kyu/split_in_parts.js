// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
// Assumptions:

// String length is always greater than 0
// String has no spaces
// Size is always positive

var splitInParts = function (s, partLength) {
  let result = "";

  for (let i = 0; i < s.length; i += partLength) {
    result += s.substring(i, i + partLength);

    if (i + partLength < s.length) {
      result += " ";
    }
  }

  return result;
};
