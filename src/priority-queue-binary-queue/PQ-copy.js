
const top = 0,
      parent = i => Math.floor(i / 2),
      left = i => (i * 2),
      right = i => (i * 2) + 1;

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._comparator = comparator;
    this._ = [];
  }
  
  peek = () => this._[top];
  
  size = () => this._.length;
  
  enqueue =val => {
    this._.push(val);
    this.ReHeapUp();
  }
  
  dequeue = () => {
    let bottom = this.size() - 1;
    if (bottom > top)
      this._swap(bottom, top);
    const popVal = this._.pop();
    this.ReHeapDown()
    return popVal;
  }
  
  ReHeapUp = () => {
    let bottom = this.size() - 1;
    while (bottom > top && this._greater(bottom, parent(bottom))) {
      this._swap(bottom, parent(bottom))
      bottom = parent(bottom)
    }
  }
  
  ReHeapDown = () => {
    let node = top;
    while ((left(node) < this.size() && this._greater(left(node), node))
          ||
           (right(node) < this.size() && this._greater(right(node), node)))
      {
        let max_node = this._greater(right(node), left(node)) ? right(node) : left(node);
        
        this._swap(max_node, node);
        node = max_node;
      }
  }
  
  _greater = (i, j) => this._comparator(this._[i], this._[j])
  
  _swap = (i, j) => [this._[i], this._[j]] = [this._[j], this._[i]];
}