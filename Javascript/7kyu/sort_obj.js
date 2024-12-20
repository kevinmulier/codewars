const sortList = (sortBy, list) => [...list].sort((a, b) => b[sortBy] - a[sortBy]);
