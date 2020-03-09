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
const DFS = (source, graph, visited = new Set()) => {
  if (!visited.has(source)) return true;
  
  visited.add(source);

  let neighbors = graph.get(source);
  for (let next of neighbors) {
      //visited.add(next);
      if (DFS(next, graph, visited) == true) return true;
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
  const stack = new stack();
  const visited = new stack();
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
