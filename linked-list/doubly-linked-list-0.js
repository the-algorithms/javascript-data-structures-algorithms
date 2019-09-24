/**
 * Initialize your data structure here.
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class MyLinkedList {
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

  getHead() {
    return this.head;
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
    const node = new ListNode(val);
    let next = this.head;

    node.next = next;
    node.prev = null;
    if (next) next.prev = node;

    this.head = node;
  }

  addAtTail(val) {
    if (this.head == null) {
      this.addAtHead(val);
      return;
    }
    let prev = this.getTail();
    const node = new ListNode(val);
    node.prev = prev;
    prev.next = node;
  }

  addAtIndex(index, val) {
    if (index <= 0) {
      this.addAtHead(val);
      return;
    }

    let head = this.getHead();
    let i = 0;
    while (head) {
      i++;
      head = head.next;
    }

    if (index > i) return;

    let prev = this.getNode(index - 1);
    let next = prev.next || null;

    const curr = new ListNode(val);
    curr.next = next;
    curr.prev = prev;

    prev.next = curr;
    if (next) next.prev = curr;
  }

  deleteAtIndex(index) {
    let curr = this.getNode(index);
    if (curr == null) return;

    let prev = this.getNode(index - 1);
    let next = curr.next;
    if (prev) prev.next = next;
    else this.head = next;

    if (next) next.prev = prev;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

/**
 * TEST CASES
 ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
 [[],[1],[3],[1,2],[1],[1],[1]]
 
 ["MyLinkedList","addAtHead","addAtIndex","get","get","get"]
 [[],[1],[1,2],[1],[0],[2]]
 
 ["MyLinkedList","addAtIndex","get","deleteAtIndex"]
 [[],[-1,0],[0],[-1]]
 
 ["MyLinkedList","addAtIndex","get","deleteAtIndex"]
 [[],[-1,0],[0],[-1]]
 
 ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
 [[],[1],[3],[1,2],[1],[0],[0]]
 
 ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
 [[],[1],[3],[1,2],[-1],[1],[-3]]
 
 ["MyLinkedList","addAtIndex","get","deleteAtIndex"]
 [[],[-1,0],[0],[-1]]
 
 ["MyLinkedList","addAtHead","addAtHead","deleteAtIndex","addAtIndex","addAtHead","addAtHead","addAtHead","get","addAtTail","addAtIndex","addAtHead"]
 [[],[5],[2],[1],[1,9],[4],[9],[8],[3],[1],[3,6],[3]]
 */
