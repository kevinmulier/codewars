function findChildren(santasList, children) {
  return [...new Set(santasList.filter(child => children.includes(child)))].sort();
}
