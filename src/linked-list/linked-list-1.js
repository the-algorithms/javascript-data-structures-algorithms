/**
 * Initialize your data structure here.
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  getNode(index) {
    if (index < 0) return null;
    let curr = this.head;
    for (let i = 0; i < index && curr; ++i) {
      curr = curr.next;
    }
    return curr;
  }

  getTail() {
    let curr = this.head;
    while (curr && curr.next) {
      curr = curr.next;
    }
    return curr;
  }

  get(index) {
    let curr = this.getNode(index);
    return curr == null ? -1 : curr.val;
  }

  addAtHead(val) {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  addAtTail(val) {
    if (this.head == null) {
      this.addAtHead(val);
      return;
    }
    let prev = this.getTail();
    const newNode = new ListNode(val);
    prev.next = newNode;
  }

  addAtIndex(index, val) {
    if (index <= 0) {
      this.addAtHead(val);
      return;
    }

    let prev = this.getNode(index - 1);
    if (prev == null) return;

    const curr = new ListNode(val);
    const next = prev.next;
    curr.next = next;
    prev.next = curr;
  }

  deleteAtIndex(index) {
    let curr = this.getNode(index);
    if (curr == null) return;

    let prev = this.getNode(index - 1);
    let next = curr.next;
    if (prev) prev.next = next;
    else this.head = next;
  }
  // TODO
  getlength() {}

  //TODO
  search() {}
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var list = new SinglyLinkedList()
 * var param_1 = list.get(index)
 * list.addAtHead(val)
 * list.addAtTail(val)
 * list.addAtIndex(index,val)
 * list.deleteAtIndex(index)
 */
