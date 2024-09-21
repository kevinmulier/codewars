function riders(stations) {
  let totalDistance = 0;
  let riderCount = 1;

  for (let i = 0; i < stations.length; i++) {
    if (totalDistance + stations[i] > 100) {
      riderCount++;
      totalDistance = stations[i];
    } else {
      totalDistance += stations[i];
    }
  }
  
  return riderCount;
}
