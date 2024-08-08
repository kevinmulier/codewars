function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  if (node === null) {
    throw new Error("The list is empty.");
  }

  let current = node;
  let count = 0;

  while (current !== null) {
    if (count === index) {
      return current;
    }
    count++;
    current = current.next;
  }

  throw new Error("Index is out of range.");
}
