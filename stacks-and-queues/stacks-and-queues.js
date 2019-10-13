// Stack Class
class Stack {
  constructor() {
    this.items = [];
  }
  Push(item) {
    this.items.push(item);
  }
  Pop() {
    if (!this.items.length) return null;
    return this.items.pop();
  }
  Top() {
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
  Enqueue(item) {
    this.queue.unshift(item);
    this.size += 1;
  }
  Dequeue() {
    this.size -= 1;
    return this.queue.pop();
  }
}
