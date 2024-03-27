//

function calculate(str) {
  let parsedStr = str.replace(/plus/g, "+").replace(/minus/g, "-");
  let result = eval(parsedStr);
  return String(result);
}
