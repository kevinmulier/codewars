const average = (scores) => Math.round(scores.reduce((acc, curr) => acc + curr, 0) / scores.length);
