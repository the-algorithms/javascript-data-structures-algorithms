/**
 * Return the length of the shortest path between root and target node.
 *
 * @param {*} graph
 * @param {*} source
 * @param {*} target
 *
 * BFS template 1
 */
const BFS = (graph, source, target) => {
  const queue = new Queue(); // store all nodes which are waiting to be processed
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

// BFS Template I
/**
 * Return the length of the shortest path between root and target node.
 
int BFS(Node root, Node target) {
  Queue<Node> queue;  // store all nodes which are waiting to be processed
  int step = 0;       // number of steps neeeded from root to current node
  // initialize
  add root to queue;
  // BFS
  while (queue is not empty) {
      step = step + 1;
      // iterate the nodes which are already in the queue
      int size = queue.size();
      for (int i = 0; i < size; ++i) {
          Node cur = the first node in queue;
          return step if cur is target;
          for (Node next : the neighbors of cur) {
              add next to queue;
          }
          remove the first node from queue;
      }
  }
  return -1;          // there is no path from root to target
}
*/

// BFS Template II
/**
 * Return the length of the shortest path between root and target node.
 
int BFS(Node root, Node target) {
  Queue<Node> queue;  // store all nodes which are waiting to be processed
  Set<Node> visited;  // store all the nodes that we've visited
  int step = 0;       // number of steps neeeded from root to current node
  // initialize
  add root to queue;
  add root to visited;
  // BFS
  while (queue is not empty) {
      step = step + 1;
      // iterate the nodes which are already in the queue
      int size = queue.size();
      for (int i = 0; i < size; ++i) {
          Node cur = the first node in queue;
          return step if cur is target;
          for (Node next : the neighbors of cur) {
              if (next is not in visited) {
                  add next to queue;
                  add next to visited;
              }
              remove the first node from queue;   
          }
      }
  }
  return -1;          // there is no path from root to target
}

*/
