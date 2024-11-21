function paul(x) {
  const points = {
    'kata': 5,
    'Petes kata': 10,
    'life': 0,
    'eating': 1,
  };

  let totalScore = x.reduce((acc, activity) => acc + points[activity], 0);

  if (totalScore < 40) {
    return 'Super happy!';
  } else if (totalScore < 70) {
    return 'Happy!';
  } else if (totalScore < 100) {
    return 'Sad!';
  } else {
    return 'Miserable!';
  }
}
