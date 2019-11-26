class MyCircularQueue {
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

export default MyCircularQueue;
