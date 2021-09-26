// https://blog.bitsrc.io/data-structures-you-should-know-as-a-javascript-developer-9a35eb3b319c

// Usage
const Tree = require("./bst");

const t = new Tree();

t.add(10);
t.add(8);
t.add(11);
t.add(23);
t.add(1);
t.add(9);

t.print();
/*
Prints: 
1
8
9
10
11
23
*/

//Impelemnt

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left_child = null;
    this.right_child = null;
  }

  compare(v) {
    if (this.value > v) return -1;
    if (this.value == v) return 0;
    if (this.value < v) return 1;
  }
}

module.exports = class BST {
  constructor() {
    this.root_node = null;
  }

  /**
  If root node is empty (tree is empty), elem becomes root node
  If elem is lower than root node, switch to the left sub-node and check if it's empty 
    If it's empty, elem becomes left sub node
    If not, keep traversing this way
  If elem is higher or equal to root node, switch to right sub-node and check if it's empty
    if it's empty, elem becomes the right sub-node
    If not, keep traversing this way
  */
  add(elem) {
    if (!this.root_node) {
      this.root_node = new BinaryTreeNode(elem);
      return;
    }

    let inserted = false;
    let currentNode = this.root_node;
    do {
      let comp = currentNode.compare(elem);
      if (comp == -1) {
        if (!currentNode.left_child) {
          currentNode.left_child = new BinaryTreeNode(elem);
          inserted = true;
        } else {
          currentNode = currentNode.left_child;
        }
      }

      if (comp != -1) {
        if (!currentNode.right_child) {
          currentNode.right_child = new BinaryTreeNode(elem);
          inserted = true;
        } else {
          currentNode = currentNode.right_child;
        }
      }
    } while (!inserted);
  }

  inorder(parent) {
    if (parent) {
      this.inorder(parent.left_child);
      console.log(parent.value);
      this.inorder(parent.right_child);
    }
  }

  print() {
    this.inorder(this.root_node);
  }
};
