/**
 * Depth-first search
 *
 * @param {*} source
 * @param {*} target
 * @param {*} visited
 *
 * DFS Template 1 - Recursion
 */
const DFS = (source, target, visited = new Set()) => {
  if (source == target) return true;

  for (let next of cur[neighbors]) {
    if (!visited.has(next)) {
      visited.add(next);
      if (DFS(next, target, visited) == true) return true;
    }
  }
  return false;
};

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
