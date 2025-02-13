function equalTo24(a, b, c, d) {
  const numbers = [a, b, c, d];
  const ops = ["+", "-", "*", "/"];

  function evaluate(a, b, op) {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b === 0 ? NaN : a / b;
    }
    return NaN;
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (j === i) continue;
      for (let k = 0; k < 4; k++) {
        if (k === i || k === j) continue;
        for (let l = 0; l < 4; l++) {
          if (l === i || l === j || l === k) continue;

          const values = [numbers[i], numbers[j], numbers[k], numbers[l]];

          for (let op1 of ops) {
            for (let op2 of ops) {
              for (let op3 of ops) {
                // ((a op1 b) op2 c) op3 d
                let result = evaluate(evaluate(evaluate(values[0], values[1], op1), values[2], op2), values[3], op3);
                if (Math.abs(result - 24) < 0.0001) {
                  return `((${values[0]}${op1}${values[1]})${op2}${values[2]})${op3}${values[3]}`;
                }

                // (a op1 b) op2 (c op3 d)
                result = evaluate(evaluate(values[0], values[1], op1), evaluate(values[2], values[3], op3), op2);
                if (Math.abs(result - 24) < 0.0001) {
                  return `(${values[0]}${op1}${values[1]})${op2}(${values[2]}${op3}${values[3]})`;
                }

                // a op1 (b op2 (c op3 d))
                result = evaluate(values[0], evaluate(values[1], evaluate(values[2], values[3], op3), op2), op1);
                if (Math.abs(result - 24) < 0.0001) {
                  return `${values[0]}${op1}(${values[1]}${op2}(${values[2]}${op3}${values[3]}))`;
                }

                // a op1 ((b op2 c) op3 d)
                result = evaluate(values[0], evaluate(evaluate(values[1], values[2], op2), values[3], op3), op1);
                if (Math.abs(result - 24) < 0.0001) {
                  return `${values[0]}${op1}((${values[1]}${op2}${values[2]})${op3}${values[3]})`;
                }
              }
            }
          }
        }
      }
    }
  }

  return "It's not possible!";
}
