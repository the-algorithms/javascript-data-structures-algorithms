/**
 * Return the length of the shortest path between root and target node.
 *
 * @param {*} graph
 * @param {*} source
 * @param {*} target
 *
 * BFS emplate 1
 */
const BFS = (graph, source, target) => {
  const queue = []; // store all nodes which are waiting to be processed
  let step = 0; // number of steps neeeded from root to current node
  // initialize
  queue.enqueue(source);
  // BFS
  while (queue.length) {
    step = step + 1;
    // iterate the nodes which are already in the queue
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let curr = queue.dequeue();
      if (curr == target) return step;
      // neighbors to process
      for (let next of curr[neighbors]) queue.enqueue(next);
    }
  }
  return -1; // there is no path from root to target
};

/**
 * BFS Template 2
 */

const BFS = (graph, source, target) => {
  const queue = []; // store all nodes which are waiting to be processed
  const visited = new Set();
  let step = 0; // number of steps neeeded from root to current node
  // initialize
  queue.enqueue(source);
  visited.add(source);
  // BFS
  while (queue.length) {
    step = step + 1;
    // iterate the nodes which are already in the queue
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let curr = queue.dequeue();
      if (curr == target) return step;
      // neighbors to process
      for (let next of curr[neighbors]) {
        if (!visited.has(next)) {
          queue.enqueue(next);
          visited.add(next);
        }
      }
    }
  }
  return -1; // there is no path from root to target
};
