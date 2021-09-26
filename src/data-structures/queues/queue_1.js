// https://blog.bitsrc.io/data-structures-you-should-know-as-a-javascript-developer-9a35eb3b319c

// Usage
const Queue = require("./queues");

let q = new Queue(3, 2);

q.enqueue(1);
q.enqueue(2); //ignored...

let x = 0;
while ((x = q.dequeue())) {
  console.log(x);
}
/*
Prints:
3
1
*/

// Implement
class Queue {
  data = [];
  maxSize;

  constructor(initialData, maxSize = -1) {
    this.data = Array.isArray(initialData)
      ? initialData
      : typeof initialData == "undefined"
      ? []
      : [initialData];
    this.maxSize = maxSize;
  }

  isFull() {
    return this.maxSize != -1 ? this.data.length == this.maxSize : false;
  }

  isEmpty() {
    return this.data.length == 0;
  }

  enqueue(item) {
    if (this.isFull()) {
      return false;
    }
    this.data.push(item);
  }

  *generator() {
    while (!this.isEmpty()) {
      yield this.data.shift();
    }
  }

  dequeue() {
    const { value, done } = this.generator().next();
    if (done) return false;
    return value;
  }
}
