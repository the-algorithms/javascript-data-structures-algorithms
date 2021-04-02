/* 
 * MIN HEAP IMPLEMENTATION
 *
 * Toggle the comparator symbol to switch between
 * min-heap and max heap
 * 
 */
 // const parent = i => ((i + 1) >> 1) - 1; // divide by 2
// const left = i => (i << 1) + 1;  // multiply by 2
// const right = i => (i + 1) << 1;

const top = 0,
      parent = i => Math.floor(i / 2),
      left = i => 2 * i,
      right = i => (2 * i) + 1;

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
    const popVal = this.peek();
    const bottom = this.size() - 1;
    if (bottom > top)
      this._swap(top, bottom);
  
    this._heap.pop();
    this._ReHeapDown();
    return popVal;
  }

  _greater = (i, j) => this._comparator(this._heap[i], this._heap[j]);
  _swap = (i, j) => [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    
  _ReheapUp() {
    let bottom = this.size() - 1;
    while (bottom > top && this._greater(bottom, parent(bottom))) {
      this._swap(bottom, parent(bottom));
      bottom = parent(bottom);
    }
  }
  _ReHeapDown() {
    let node = top;
    while (
      (left(node) < this.size() && this._greater(left(node), node)) 
       ||
      (right(node) < this.size() && this._greater(right(node), node))
    ) {
        let maxChild = (this._greater(right(node), left(node))) ? right(node) : left(node);
        this._swap(node, maxChild);
        node = maxChild;
    }
  }
}