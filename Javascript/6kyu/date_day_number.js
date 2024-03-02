function getDay(day, isLeap) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (isLeap) daysInMonth[1] = 29;

  let month = 0;

  while (day > daysInMonth[month]) {
    day -= daysInMonth[month];
    month++;
  }

  return `${months[month]}, ${day}`;
}

// What date corresponds to the nth day of the year?
// The answer depends on whether the year is a leap year or not.

// Write a function that will help you determine the date if you know the number of the day in the year, as well as whether the year is a leap year or not.
// The function accepts the day number and a boolean value isLeap as arguments, and returns the corresponding date of the year as a string "Month, day".
// Only valid combinations of a day number and isLeap will be tested.

// Examples:
// * With input `41, false` => return "February, 10"
// * With input `60, false` => return "March, 1
// * With input `60, true` => return "February, 29"
// * With input `365, false` => return "December, 31"
// * With input `366, true` => return "December, 31"
