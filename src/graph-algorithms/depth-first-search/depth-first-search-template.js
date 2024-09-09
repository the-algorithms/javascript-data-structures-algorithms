/**
 * Depth-first search
 *
 * @param {*} source
 * @param {*} target
 * @param {*} visited
 *
 */

/*
 * DFS - Template I
 * Return true if there is a path from cur to target.

boolean DFS(Node cur, Node target, Set<Node> visited) {
  return true if cur is target;
  for (next : each neighbor of cur) {
      if (next is not in visited) {
          add next to visted;
          return true if DFS(next, target, visited) == true;
      }
  }
  return false;
}
*/

// DFS Template 1 - recursion
const DFS = (cur, target, visited) => {
  if (curr == target) return true;

  for (let next of curr[neighbors]) {
    if (!visited.has(next)) {
      visited.add(next);
      if (DFS(next, target, visited)) return true;
    }
  }
  return false;
};

/**
 * 
 * DFS - Template II
 * Return true if there is a path from cur to target.
 
 boolean DFS(int root, int target) {
    Set<Node> visited;
    Stack<Node> stack;
    add root to stack;
    while (s is not empty) {
        Node cur = the top element in stack;
        remove the cur from the stack;
        return true if cur is target;
        for (Node next : the neighbors of cur) {
            if (next is not in visited) {
                add next to visited;
                add next to stack;
            }
        }
    }
    return false;
  }
 */

/**
 * DFS Template 2 - Iteration
 */
const DFS = (source, target) => {
  const stack = [source];
  const visited = new Set([source]);
  stack.push(source);

  while (stack.length) {
    let curr = stack.pop();
    if (curr == target) return true;

    for (let next of curr[neighbors]) {
      if (!visited.has(next)) {
        stack.push(next);
        visited.add(next);
      }
    }
  }
};
