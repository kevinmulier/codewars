function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  if (!listA) return listB;
  if (!listB) return listA;

  let current = listA;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = listB;
  return listA;
}
