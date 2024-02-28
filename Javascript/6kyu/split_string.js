function solution(str) {
  let solutionArr = [];
  let splittedStr = str.split('');

  for (let i = 0; i < splittedStr.length; i = i + 2) {
    const nextStr = splittedStr[i + 1] || '_';
    const combinedStr = splittedStr[i] + nextStr;

    solutionArr.push(combinedStr);
  }

  return solutionArr;
}

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
