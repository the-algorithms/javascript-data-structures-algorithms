// Stack Class
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    if (!this.items.length) return null;
    return this.items.pop();
  }
  top() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

// Queue Class
class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }
  enqueue(item) {
    this.queue.unshift(item);
    this.size += 1;
  }
  dequeue() {
    this.size -= 1;
    return this.queue.pop();
  }
}
