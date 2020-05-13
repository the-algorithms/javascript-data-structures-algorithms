/* 
 * MIN HEAP IMPLEMENTATION
 *
 * Toggle the comparator symbol to switch between
 * min-heap and max heap
 * 
 */

const top = 0;
const parent = i => ((i + 1) >> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

// MIN HEAP
class PriorityQueue {
  constructor(comparator = (a, b) => a < b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size = () => this._heap.length;
  peek = () => this._heap[top];

  enqueue(val) {
    this._heap.push(val);
    this._ReheapUp();
  }
  dequeue() {
    const poppedVal = this.peek();
    const bottom = this.size() - 1;
    if (bottom > top) {
      this._swap(top, bottom);
    }
    this._heap.pop();
    this._ReHeapDown();
    return poppedVal;
  }

  _greater = (i, j) => this._comparator(this._heap[i], this._heap[j]);
  _swap = (i, j) => [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    
  _ReheapUp() {
    let node = this.size() - 1;
    while (node > top && this._greater(node, parent(node))) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  }
  _ReHeapDown() {
    let node = top;
    while (
      (left(node) < this.size() && this._greater(left(node), node)) ||
      (right(node) < this.size() && this._greater(right(node), node))
    ) {
      let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}