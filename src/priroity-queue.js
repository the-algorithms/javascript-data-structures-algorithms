
import {Heap} from './heap';

class PriorityQueue {
  constructor(item) {
    this.items = new Heap(item);
    this.length = 0;
  }

  Dequeue() {
    const item = this.items.elements[0];
    this.items.elements[0] = this.items.elements[this.length - 1];
    this.length--;
    this.items.ReHeapDown(0, this.length - 1); // RHEAP UP
    return item;
  }

  Enqueue(newItem) {
    this.length++;
    this.items.elements[this.length - 1] = newItem;
    this.items.ReheapUp(0, this.length - 1); // REHEAP DOWN
  }
}

export default PriorityQueue;

/**
 const PriorityQueue = new PQType();
  for (n of nums) {
    PQ.Enqueue(n);
    K = PQ.Dequeue();
  }
 */
