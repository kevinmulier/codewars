const matchArrays = (v, r) => v.reduce((acc, c) => acc + (r.includes(c) ? 1 : 0), 0);
