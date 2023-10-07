// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  let arr = [];
  for (let el of string.split("")) {
    if (el.charCodeAt(0) > 64 && el.charCodeAt(0) < 91) {
      arr.push(" ");
    }
    arr.push(el);
  }
  return arr.join("");
}
