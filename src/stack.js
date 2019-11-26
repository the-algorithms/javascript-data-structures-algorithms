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

  size() {
    return this.items.length;
  }
}

export default Stack;
