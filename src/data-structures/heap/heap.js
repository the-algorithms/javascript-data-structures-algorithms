/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class Heap {
  constructor(item) {
    this.elements = [];
    if (item) this.elements.push(item);
  }

  ReheapUp(root, bottom) {
    let parent;
    if (bottom > root) {
      parent = Math.floor((bottom - 1) / 2);
      if (this.elements[parent] < this.elements[bottom]) {
        const left = this.elements[parent];
        this.elements[parent] = this.elements[bottom];
        this.elements[bottom] = left;
        this.ReheapUp(root, parent);
      }
    }
  }

  ReHeapDown(root, bottom) {
    let minChild, rightChild, leftChild;

    leftChild = root * 2 + 1;
    rightChild = root * 2 + 2;
    if (leftChild <= bottom) {
      if (leftChild == bottom) minChild = leftChild;
      else {
        if (this.elements[leftChild] <= this.elements[rightChild])
          minChild = rightChild;
        else minChild = leftChild;
      }
      if (this.elements[root] < this.elements[minChild]) {
        const left = this.elements[root];
        this.elements[root] = this.elements[minChild];
        this.elements[minChild] = left;
        this.ReHeapDown(minChild, bottom);
      }
    }
  }
}
