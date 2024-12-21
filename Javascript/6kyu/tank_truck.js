function tankvol(h, d, vt) {
  const r = d / 2;
  const theta = 2 * Math.acos((r - h) / r);
  const segmentArea = ((r * r) / 2) * (theta - Math.sin(theta));
  const totalArea = Math.PI * r * r;
  const remainingVolume = (segmentArea / totalArea) * vt;
  return Math.floor(remainingVolume);
}
