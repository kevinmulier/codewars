function lineupStudents(string) {
  return string.split(" ").sort((a, b) => b.length - a.length || b.localeCompare(a));
}
