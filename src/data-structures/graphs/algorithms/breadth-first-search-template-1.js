/**
 * Return the length of the shortest path between root and target node.
 *
 * @param {*} graph
 * @param {*} source
 * @param {*} target
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
    for (let i = 0; i < queue.length; i++) {
      let curr = queue.dequeue();
      if (curr == target) return step;

      for (let next of curr[neighbors]) queue.enqueue(next);
    }
  }
  return -1; // there is no path from root to target
};
