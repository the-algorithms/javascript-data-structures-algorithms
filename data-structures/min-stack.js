// Stack Class ADT

class MinStack {
  constructor() {
    this.data = [];
  }

  push(item) {
    this.data.push(item);
  }
  pop() {
    if (!this.data.length) return null;
    else return this.data.pop();
  }
  top() {
    return this.data[this.data.length - 1];
  }
  getSize() {
    return this.data.length;
  }
  getMin() {
    return Math.min(...this.data);
  }
}

export default MinStack;
