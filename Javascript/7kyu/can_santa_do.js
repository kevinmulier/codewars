function determineTime(durations) {
  const totalSeconds = durations.reduce((acc, time) => {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return acc + (hours * 3600) + (minutes * 60) + seconds;
  }, 0);

  const secondsInADay = 24 * 3600;
  
  return totalSeconds <= secondsInADay;
}
