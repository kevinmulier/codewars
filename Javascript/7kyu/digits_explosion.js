const explode = (s) => s.split('').reduce((acc, c) => acc + c.repeat(Number(c)), '');
