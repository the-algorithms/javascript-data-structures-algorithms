class TreeType {
  constructor() {
    root = NULL;
  }

  PutItem(item) {
    this.Insert(root, item);
  }

  DeleteItem(item) {
    this.Delete(root, item);
  }

  GetItem(item, found) {
    this.Retrieve(root, item, found);
    return item;
  }

  Print() {
    let size = this.getLength();
  }

  // BST Helpers
  isFull() {}

  isEmpty() {
    return root == null;
  }

  getLength() {
    return CountNodes(root);
  }

  getRootPtr() {
    return root;
  }

  FindMin() {
    let data;
    let location = root;

    while (location !== null) {
      data = location.info;
      location = location.left;
    }
    return data;
  }

  FindMax() {
    let data;
    let location = root;

    while (location.info) {
      data = location.info;
      location = location.right;
    }
    return data;
  }
}
