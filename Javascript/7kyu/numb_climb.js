const climb = (N) => (N < 1 ? [] : [...climb(N % 2 === 0 ? N / 2 : (N - 1) / 2), N]);
