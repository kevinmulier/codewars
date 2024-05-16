const autocomplete = (i, d) => d.filter((w) => w.toLowerCase().startsWith(i.toLowerCase().replace(/[^a-zA-Z]/g, ""))).slice(0, 5);
