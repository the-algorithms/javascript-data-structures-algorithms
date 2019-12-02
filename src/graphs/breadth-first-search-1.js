import Queue from "./Queue";
/**
 * Breadth-First Search
 * BFS Task: Return the length of the shortest path between root and target node.
 */
const BFS = (myGraph, root, target) => {
  // Store all nodes which are waiting to be processed
  const queue = new Queue();
  // Store all the nodes that we have visited
  const visited = new Set();
  // Initialize no.of steps neeeded from root to current node
  let step = -1;

  if (myGraph.graph.has(root) === true) {
    // Add root to the queue and visited
    queue.enqueue(root);
    visited.add(root);
    //console.log(queue, visited, target)
    // BFS
    while (!queue.isEmpty()) {
      step = step + 1;
      let size = queue.size;

      for (let i = 0; i < size; ++i) {
        const curr = queue.dequeue();
        if (curr === target) return step;

        // Get adjacent nodes of the current node
        const neighbors = myGraph.graph.get(curr);

        if (neighbors.length > 0) {
          for (let next of neighbors) {
            if (!visited.has(next)) {
              queue.enqueue(next);
              visited.add(next);
            }
          }
        }
      }
    }
    return -1;
  }
};

export default BFS;
