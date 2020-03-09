/**
 * List Node Class
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * MyLinkedList Class
 */

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  get(index) {
    if (index > this.size) return -1;

    if (this.head == null) return -1;

    let count = 0;
    let loc = this.head;
    while (loc) {
      if (index == count) return loc.val;
      count++;
      loc = loc.next;
    }
    return -1;
  }

  addAtHead(val) {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  addAtTail(val) {
    const newNode = new ListNode(val);
    let loc = this.head;
    let prev;
    while (loc) {
      prev = loc;
      loc = loc.next;
    }
    prev.next = newNode;
    this.size++;
  }

  addAtIndex(index, val) {
    if (index > this.size) return;

    let count = 0;
    let loc = this.head;
    let prev = null;
    const newNode = new ListNode(val);

    if (index == count || index < 0) {
      newNode.next = loc;
      this.head = newNode;
      return;
    }

    while (loc) {
      if (index == count) {
        prev.next = newNode;
        newNode.next = loc;
        this.size++;
        return;
      }

      count++;
      prev = loc;
      loc = loc.next;
    }
    prev.next = newNode;
    this.size++;
  }

  deleteAtIndex(index) {
    if (index > this.size) return;

    let loc = this.head;
    let prev = null;
    let count = 0;

    if (index == count) {
      this.head = this.head.next;
      return;
    }
    while (loc) {
      if (index == count) {
        prev.next = loc.next;
        this.size--;
        return;
      }
      count++;
      prev = loc;
      loc = loc.next;
    }

    if (index == this.size) {
      loc = null;
    }
  }
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
