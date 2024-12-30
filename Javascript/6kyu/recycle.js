function recycle(objects) {
  const bins = {
    paper: [],
    glass: [],
    organic: [],
    plastic: [],
  };

  objects.forEach((obj) => {
    if (obj.material) {
      bins[obj.material].push(obj.type);
    }
    if (obj.secondMaterial) {
      bins[obj.secondMaterial].push(obj.type);
    }
  });

  return [bins.paper, bins.glass, bins.organic, bins.plastic];
}
