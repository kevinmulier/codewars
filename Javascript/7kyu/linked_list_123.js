function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  let newNode = new Node(data);
  newNode.next = head;
  return newNode;
}

function buildOneTwoThree() {
  let head = null;
  head = push(head, 3);
  head = push(head, 2);
  head = push(head, 1);
  return head;
}
