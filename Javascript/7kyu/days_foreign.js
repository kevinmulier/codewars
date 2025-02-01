function daysRepresented(trips) {
  let days = new Set();

  trips.forEach((trip) => {
    let [start, end] = trip;
    for (let day = start; day <= end; day++) {
      days.add(day);
    }
  });

  return days.size;
}
