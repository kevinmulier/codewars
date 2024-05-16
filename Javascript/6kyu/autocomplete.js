const autocomplete = (i, d) => d.filter((w) => w.toLowerCase().startsWith(i.replace(/[^A-Z]/gi, ""))).slice(0, 5);
