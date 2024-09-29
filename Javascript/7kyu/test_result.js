function testResult(marks) {
  const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
  const classAverage = parseFloat((totalMarks / marks.length).toFixed(3));

  const result = {
    h: 0,
    a: 0,
    l: 0,
  };

  marks.forEach((mark) => {
    if (mark >= 9) {
      result.h++;
    } else if (mark >= 7) {
      result.a++;
    } else {
      result.l++;
    }
  });

  const output = [classAverage, result];
  if (result.h === marks.length) {
    output.push('They did well');
  }

  return output;
}
