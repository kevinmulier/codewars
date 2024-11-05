const firstNonRepeated = (s) => s.split("").find((l, i) => s.lastIndexOf(l) === s.indexOf(l)) || null;
