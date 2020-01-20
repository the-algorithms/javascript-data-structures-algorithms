class Graph {
  // constructor
  constructor(vertices = 0) {
    this.graph = new Map();
    this.vertices = vertices;
  }

  addEdge(u, v) {
    if (this.graph.has(u)) {
      this.graph.get(u).push(v);
    } else {
      this.graph.set(u, []);
      this.graph.get(u).push(v);
    }
  }
}

//export default Graph;

// Queue ADT  //////////////////////////////////////////////////////
class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }
  // Add to the back/tail
  enqueue(item) {
    this.queue.push(item);
    this.size += 1;
  }
  // Remove from the front/head
  dequeue() {
    this.size -= 1;
    return this.queue.shift();
  }
  peek() {
    if (this.size) return this.queue[0];
    else return null;
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  /* size() {
        return this.size;
      } */
}
//export default Queue;

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

function SearchBFS() {
  // Driver code
  // Create a graph given in the above diagram
  var myGraph = new Graph(6);
  myGraph.addEdge(0, 1);
  myGraph.addEdge(1, 0);
  myGraph.addEdge(1, 2);
  myGraph.addEdge(1, 3);
  myGraph.addEdge(2, 1);
  myGraph.addEdge(2, 4);
  myGraph.addEdge(3, 1);
  myGraph.addEdge(3, 4);
  myGraph.addEdge(3, 5);
  myGraph.addEdge(4, 2);
  myGraph.addEdge(4, 3);
  myGraph.addEdge(5, 3);
  console.log(myGraph);
  const result = BFS(myGraph, 2, 0);
  console.log(result);
}

SearchBFS();
