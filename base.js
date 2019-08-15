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
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

// Queue ADT  //////////////////////////////////////////////////////

class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  enqueue(item) {
    this.queue.unshift(item);
    this.size += 1;
  }

  dequeue() {
    this.size -= 1;
    return this.queue.pop();
  }
  
  top() {
    return this.queue[this.size];
  }
}

// Linked List ADT ////////////////////////////////////////////////

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// method 1
function appendToList(head, value) {
  let tail = head;
  while(tail.next) {
    tail = tail.next;
  }
  tail.next = new LinkedListNode(value);
  return tail.next;
}

let head = new LinkedListNode(1);
let nodeToDelete = head;
appendToList(head, 2);

// method 2
function valuesToLinkedListNodes(values) {
  const nodes = [];
  for (let i = 0; i < values.length; i++) {
    const node = new LinkedListNode(values[i]);
    if (i > 0) {
      nodes[i - 1].next = node;
    }
    nodes.push(node);
  }
  return nodes;
}

let nodes = valuesToLinkedListNodes([1, 2, 3, 4]);

// Binary Tree Node ADT ////////////////////////////////////////////////

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

let treeRoot = new BinaryTreeNode(5);
let leftNode = treeRoot.insertLeft(8);
leftNode.insertLeft(1);
leftNode.insertRight(2);
let rightNode = treeRoot.insertRight(6);
rightNode.insertLeft(3);
rightNode.insertRight(4);

// Graph Node ADT ////////////////////////////////////////////////

class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

// DEQUEUE (TWO WAY) ////////////////////////////////////////////////

class QueueTwoStacks
{
private:
    stack<int> inStack_;
    stack<int> outStack_;

public:
    void enqueue(int item)
    {
        inStack_.push(item);
    }
    int dequeue()
    {
       while(!inStack_.empty())
       {
         int i = inStack_.top();
         inStack_.pop();
         outStack_.push(i);
       }
       int top = outStack_.top();
       outStack_.pop();
       while(!outStack_.empty())
       {
         int k = outStack_.top();
         outStack_.pop();
         inStack_.push(k);
       }
        return top;
    }
};


