// Linked List ADT ////////////////////////////////////////////////

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

deleteNode(b);

// Method 2
function appendToList(head, value) {
  let tail = head;
  while (tail.next) {
    tail = tail.next;
  }
  tail.next = new LinkedListNode(value);
  return tail.next;
}

let head = new LinkedListNode(1);
let nodeToDelete = head;
appendToList(head, 2);
appendToList(head, 3);
appendToList(head, 4);

// Method 3
function valuesToLinkedListNodes(values) {
  const nodes = [];
  for (let i = 0; i < values.length; i++) {
    const node = new LinkedListNode(values[i]);
    if (i > 0) {
      nodes[i - 1].next = node;
    }
    nodes.push(node);
  }
  return nodes;
}

let nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
reversedList = reverse(nodes[0]);

nodes = valuesToLinkedListNodes([1, 2, 3, 4, 5, 6]);
