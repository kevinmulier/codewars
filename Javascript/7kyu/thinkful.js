const processData = (data) => data.map((arr) => arr[0] - arr[1]).reduce((acc, c, i) => (i === 0 ? c : acc * c), 0);
