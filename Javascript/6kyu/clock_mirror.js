const WhatIsTheTime = (timeInMirror) => {
  let [hour, minute] = timeInMirror.split(":").map(Number);
  hour = (12 - hour) % 12;
  if (minute !== 0) hour = (hour - 1 + 12) % 12;
  minute = (60 - minute) % 60;
  if (hour === 0) hour = 12;
  return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
};
