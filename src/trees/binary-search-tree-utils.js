//Non-Member/ Utility Functions
const Destroy = tree => {
  if (tree !== null) {
    Destroy(tree.left);
    Destroy(tree.right);
    delete tree;
  }
};

const Insert = (tree, item) => {
  if (tree == NULL) {
    tree = new TreeNode(info);
    tree.left = null;
    tree.right = null;
  } else if (item < tree.info) Insert(tree.left, item);
  else if (item > tree.info) Insert(tree.right, item);
};

const Delete = (tree, item) => {
  if (item < tree.info) Delete(tree.left, item);
  else if (item > tree.info) Delete(tree.right, item);
  else DeleteNode(tree);
};

const DeleteNode = tree => {
  let data;
  let tempPtr = tree;

  if (tree.left == null) {
    tree = tree.right;
    delete tempPtr;
  } else if (tree.right == null) {
    tree = tree.left;
    delete tempPtr;
  } else {
    data = this.GetPredecessor(tree.left);
    if (data) tree.info = data; // REPLACEMENT
    Delete(tree.left, data); // Delete predecessor node that contained data
  }
};

// Sets data to the info member of the rightmost node in the tree
const GetPredecessor = tree => {
  let data;
  while (tree.right !== null) {
    data = tree.info;
    tree = tree.right;
  }
  return data;
};

const FindNode = (tree, item, nodePtr, parentPtr) => {
  let nodePtr = tree;
  let parentPtr = null;
  let found = false;

  while (nodePtr != null && !found) {
    if (item < nodePtr.info) {
      parentPtr = nodePtr;
      nodePtr = nodePtr.left;
    } else if (item > nodePtr.info) {
      parentPtr = nodePtr;
      nodePtr = nodePtr.right;
    } else found = false;
  }
  return { nodePtr, parentPtr };
};

const CountNodes = tree => {
  if (tree == null) return 0;
  else return this.CountNodes(tree.left) + this.CountNodes(tree.right) + 1;
};

const Retrieve = (tree, item) => {
  let item;
  let found = false;

  if (tree == null) found = false;
  // not found
  else if (ite < tree.info) Retrieve(tree.left, item);
  // search left subtree
  else {
    item = tree.info;
    found = false;
  }
  return { item, found };
};

const InOrder = tree => {
  if (tree !== null) {
    InOrder(tree.left);
    console.log(tree.info);
    InOrder(tree.right);
  }
};

const PreOrder = tree => {
  if (tree !== null) {
    console.log(tree.info);
    InOrder(tree.left);
    InOrder(tree.right);
  }
};

const PostOrder = tree => {
  if (tree !== null) {
    InOrder(tree.left);
    InOrder(tree.right);
    console.log(tree.info);
  }
};

const LevelOrder = (tree, level) => {
  // Base case
  if (tree == null) return;
  if (level == 1) console.log(tree.info, " ");
  // Recursive case
  else if (level > 1) {
    LevelOrder(tree.left, level - 1);
    LevelOrder(tree.right, level - 1);
  }
};

const PrintTree = (tree, height) => {
  console.log("Level order: ");
  for (let i = 0; i < height; ++i) LevelOrder(tree, i);

  // InOrder(tree) // PreOrder(tree)
};
