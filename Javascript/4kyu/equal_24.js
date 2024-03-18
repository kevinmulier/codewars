function equalTo24(a, b, c, d) {
  const numbers = [a, b, c, d];
  const operations = ['+', '-', '*', '/'];
  const generateAllPermutations = (arr) => {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce((acc, item, i) => {
      generateAllPermutations([...arr.slice(0, i), ...arr.slice(i + 1)]).forEach((subArray) => {
        acc.push([item].concat(subArray));
      });
      return acc;
    }, []);
  };

  const evalExpression = (exp) => {
    try {
      const result = new Function(`return ${exp}`)();
      return result - 24 === 0;
    } catch (error) {
      return false;
    }
  };

  const createExpressions = (nums, ops) => {
    const [n1, n2, n3, n4] = nums;
    const [op1, op2, op3] = ops;
    return [
      `(${n1}${op1}${n2})${op2}(${n3}${op3}${n4})`,
      `((${n1}${op1}${n2})${op2}${n3})${op3}${n4}`,
      `${n1}${op1}((${n2}${op2}${n3})${op3}${n4})`,
      `${n1}${op1}(${n2}${op2}(${n3}${op3}${n4}))`,
      `(${n1}${op1}${n2}${op2}${n3})${op3}${n4}`,
      `${n1}${op1}(${n2}${op2}${n3}${op3}${n4})`,
    ];
  };

  const permutations = generateAllPermutations(numbers);
  for (let nums of permutations) {
    for (let op1 of operations) {
      for (let op2 of operations) {
        for (let op3 of operations) {
          const expressions = createExpressions(nums, [op1, op2, op3]);
          for (let exp of expressions) {
            if (evalExpression(exp)) {
              return exp;
            }
          }
        }
      }
    }
  }
  return "It's not possible!";
}

// This is the simple version of Fastest Code : Equal to 24.

// Task
// A game I played when I was young: Draw 4 cards from playing cards, use + - * / and () to make the final results equal to 24.

// You will coding in function equalTo24. Function accept 4 parameters a b c d(4 cards), value range is 1-13.

// The result is a string such as "2*2*2*3" ,(4+2)*(5-1); If it is not possible to calculate the 24, please return "It's not possible!"

// All four cards are to be used, only use three or two cards are incorrect; Use a card twice or more is incorrect too.

// You just need to return one correct solution, don't need to find out all the possibilities.

// Examples
// equalTo24(1,2,3,4) // can return "(1+3)*(2+4)" or "1*2*3*4"
// equalTo24(2,3,4,5) // can return "(5+3-2)*4" or "(3+4+5)*2"
// equalTo24(3,4,5,6) // can return "(3-4+5)*6"
// equalTo24(1,1,1,1) // should return "It's not possible!"
// equalTo24(13,13,13,13) // should return "It's not possible!"
