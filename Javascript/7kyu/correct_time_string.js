// A new task for you!

// You have to create a method, that corrects a given time string.
// There was a problem in addition, so many of the time strings are broken.
// Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
// Examples
// "09:10:01" -> "09:10:01"
// "11:70:10" -> "12:10:10"
// "19:99:99" -> "20:40:39"
// "24:01:01" -> "00:01:01"
// If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

function timeCorrect(timestring) {
  if (!timestring) {
    return timestring;
  }

  const splittedTimestring = timestring.split(":");

  if (splittedTimestring.length !== 3 || isNaN(splittedTimestring[0]) || isNaN(splittedTimestring[1]) || isNaN(splittedTimestring[2])) {
    return null;
  }

  let hours = parseInt(splittedTimestring[0], 10);
  let minutes = parseInt(splittedTimestring[1], 10);
  let seconds = parseInt(splittedTimestring[2], 10);

  minutes += Math.floor(seconds / 60);
  seconds %= 60;
  hours += Math.floor(minutes / 60);
  minutes %= 60;
  hours %= 24;

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
