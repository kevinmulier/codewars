const numObj = (s) => s.reduce((acc, c) => acc.concat({ [String(c)]: String.fromCharCode(c) }), []);
