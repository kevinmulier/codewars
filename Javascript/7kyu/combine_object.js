function combine(...objects) {
  return objects.reduce((acc, obj) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        acc[key] = (acc[key] || 0) + obj[key];
      }
    }
    return acc;
  }, {});
}
