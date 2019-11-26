class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }
  // Add to the back/tail
  enqueue(item) {
    this.queue.push(item);
    this.size += 1;
  }
  // Remove from the front/head
  dequeue() {
    this.size -= 1;
    return this.queue.shift();
  }
  peek() {
    if (this.size) return this.queue[0];
    else return null;
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  /* size() {
      return this.size;
    } */
}

export default Queue;
