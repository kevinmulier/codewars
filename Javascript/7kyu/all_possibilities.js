const isAllPossibilities = (x) => [...x].sort((a, b) => a - b).every((el, i) => el === i);
