// https://medium.com/@gianfranconuschese/binary-search-trees-in-javascript-d35965762dbd
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //helper recursive method for insertion
  compareAndInsert(currentNode, newNode) {
    //this implementation doesn't allow for duplicates
    if (currentNode.value === newNode.value) {
      console.log("Node already exists!", currentNode);
      return false;
    }
    //if node is greater than current
    if (newNode.value > currentNode.value) {
      //if there is no node assigned to right, assign it and break our of the loop
      if (!currentNode.right) {
        currentNode.right = newNode;
        return true;
      }
      //calls function recursively with new node for comparison
      this.compareAndInsert(currentNode.right, newNode);

      //if node is less than current
    } else if (newNode.value < currentNode.value) {
      // if there is no left node, assign it and break out of loop
      if (!currentNode.left) {
        currentNode.left = newNode;
        return true;
      }
      //recursively call function with new node for comparison
      this.compareAndInsert(currentNode.left, newNode);
    }

    return true;
  }

  //checks for root node, otherwise calls recursive function
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.compareAndInsert(this.root, newNode);
    }
    return this;
  }
  //helper recursive method for
  compareAndFind(currentNode, queriedValue) {
    //node has been found
    if (currentNode.value === queriedValue) {
      return currentNode;
    }

    //if node is greater than current
    if (queriedValue > currentNode.value) {
      //if there is a node assigned to the right, recursively call with new values and return the value
      if (currentNode.right) {
        return this.compareAndFind(currentNode.right, queriedValue);
      }
      //we cannot search further, return false
      return false;
      //if node is less than current
    } else if (queriedValue < currentNode.value) {
      // if there is a node assigned to the left, recursively call with new values and return the value
      if (currentNode.left) {
        return this.compareAndFind(currentNode.left, queriedValue);
      }
      //we cannot search further, return false
      return false;
    }
  }

  //if tree has no root, return false, otherwise search using recursive methods
  find(value) {
    if (!this.root) {
      return false;
    }
    return this.compareAndFind(this.root, value);
  }
}
