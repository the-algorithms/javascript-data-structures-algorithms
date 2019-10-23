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
