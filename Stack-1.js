// STACK ADT //////////////////////////////////////////////////////

class Stack {
  constructor() {
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {
    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Return the last item without removing it
  top() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}
