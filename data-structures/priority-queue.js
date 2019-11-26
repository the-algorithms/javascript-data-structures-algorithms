// prettier-ignore
class HeapType {
    constructor(item) {
      this.elements = [];
      this.elements.push(item);
    }
  
    ReheapUp(root, bottom) 
    {
      let parent;
      if (bottom > root) {
        parent = Math.floor((bottom - 1) / 2);
        if (this.elements[parent] > this.elements[bottom]) 
        {
          const left = this.elements[parent];
          this.elements[parent] = this.elements[bottom];
          this.elements[bottom] = left;
          this.ReheapUp(root, parent);
        }
      }
    }
  
    ReHeapDown(root, bottom) {
      let minChild, 
          rightChild, 
          leftChild;
  
      leftChild = root * 2 + 1;
      rightChild = root * 2 + 2;
      if (leftChild <= bottom)
      {
        if (leftChild == bottom) 
            minChild = leftChild;
        else
        {
          if (this.elements[leftChild] >= this.elements[rightChild])
            minChild = rightChild;
          else
            minChild = leftChild;
        }
        if (this.elements[root] > this.elements[minChild])
        {
            const left = this.elements[root];
            this.elements[root] = this.elements[minChild];
            this.elements[minChild] = left;
            this.ReHeapDown(minChild, bottom);
        }
      }
    }
  }

class PQType {
  constructor(item) {
    //this.maxItems = max;
    this.items = new HeapType(item);
    this.length = 0;
  }

  Dequeue() {
    //if (length == 0)
    //
    //throw new Error("Empty list found");
    //else {
    /*
        item = items.elements[0];
      items.elements[0] = items.elements[length-1];
      length--;
      items.ReheapDown(0, length-1);
        */
    const item = this.items.elements[0];
    this.items.elements[0] = this.items.elements[this.length - 1];
    this.length--;
    this.items.ReHeapDown(0, this.length - 1);
    return item;
    //}
  }

  Enqueue(newItem) {
    //if (this.size == this.maxItems)
    //
    ///throw new Error("List reached max limit");
    //else {
    this.length++;
    this.items.elements[this.length - 1] = newItem;

    this.items.ReheapUp(0, this.length - 1);
    //}
  }

  MakeEmpty() {
    //this.elements.length = 0;
  }

  IsFull() {
    //return this.size == this.maxItems;
  }

  IsEmpty() {
    //return this.size == 0;
  }
}

const PQ = new PQType(1);
console.log(PQ.items.elements);

PQ.Enqueue(9);
PQ.Enqueue(5);
PQ.Enqueue(3);
PQ.Enqueue(2);
console.log(PQ.items.elements);

console.log("\n");
console.log(PQ.Dequeue());
console.log(PQ.Dequeue());
console.log(PQ.Dequeue());
console.log(PQ.Dequeue());
