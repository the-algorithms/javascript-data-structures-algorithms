class CircularQueue {
  constructor(k) {
    this.data = new Array(0);
    this.MAX_ITEMS = k;
    this.size = 0;
  }

  enQueue = value => {
    if (this.size < this.MAX_ITEMS) {
      this.data.push(value);

      this.size++;
      return true;
    } else return false;
  };

  deQueue = () => {
    if (this.size > 0) {
      this.data.shift();
      this.size--;
      return true;
    } else return false;
  };

  Front = () => {
    if (this.size) return this.data[0];
    else return -1;
  };

  Rear = () => {
    if (this.size) return this.data[this.size - 1];
    else return -1;
  };

  isEmpty = () => this.size === 0;
  isFull = () => this.size === this.MAX_ITEMS;
  getSize = () => this.size;
}

export default CircularQueue;

const circularQueue = new CircularQueue(3); // set the size to be 3
console.log(circularQueue.enQueue(1)); // return true
console.log(circularQueue.enQueue(2)); // return true
console.log(circularQueue.enQueue(3)); // return true
console.log(circularQueue.enQueue(4)); // return false, the queue is full
console.log(circularQueue.Rear()); // return 3
console.log(circularQueue.isFull()); // return true
console.log(circularQueue.deQueue()); // return true
console.log(circularQueue.enQueue(4)); // return true
console.log(circularQueue.Rear()); // return 4
