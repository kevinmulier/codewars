function task(w, n, c) {
  const workers = {
    Monday: "James",
    Tuesday: "John",
    Wednesday: "Robert",
    Thursday: "Michael",
    Friday: "William",
  };

  const name = workers[w];
  const cost = n * c;

  return `It is ${w} today, ${name}, you have to work, you must spray ${n} trees and you need ${cost} dollars to buy liquid`;
}
