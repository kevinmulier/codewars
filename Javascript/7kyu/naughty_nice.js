function getNiceNames(people) {
  return people.filter((person) => person.wasNice).map((person) => person.name);
}

function getNaughtyNames(people) {
  return people.filter((person) => !person.wasNice).map((person) => person.name);
}
