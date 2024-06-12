const firstToLast = (str, c) => (str.lastIndexOf(c) ? (str.lastIndexOf(c) !== str.indexOf(c) ? str.lastIndexOf(c) - str.indexOf(c) : 0) : -1);
