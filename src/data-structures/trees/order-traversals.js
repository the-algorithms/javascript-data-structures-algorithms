/**
 * Level Order Traversal or BFS
 * @param {*} root 
 */
var levelOrder = function(root) {
  const levels = [];
  if (root == null) return levels;
  
  const helper = (node, level) => {
      
      if (levels.length == level)
          levels.push(Array.of(node.val));
      else
          levels[level].push(node.val)
      
      if (node.left) helper(node.left, level+1);
      if (node.right) helper(node.right, level+1);
  }
  
  helper(root, 0);
  return levels;
};

/**
 * PreOrder or DFS in tree
 * @param {*} tree 
 * @param {*} stack 
 */
const PreOrder = (tree, stack) => {
 
  if (tree !== null) {
      
      stack.push('#' + tree.val)
      PreOrder(tree.left, stack);
      PreOrder(tree.right, stack);
      
      if (tree.left == null) stack.push('null');
      if (tree.right == null) stack.push('null');
  }
  return stack;
}