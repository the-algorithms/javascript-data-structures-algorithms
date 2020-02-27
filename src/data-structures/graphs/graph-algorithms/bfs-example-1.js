// Self try

(function main() {
  /**
   * BFS in directed-acyclic-graph (DAG)
   *
   * @param {*} source
   * @param {*} target
   */
  const BFS = (graph, source, target) => {
    // initialize
    const queue = [source];
    let step = 0;
    // BFS
    while (queue.length) {
      // iterate all nodes already in the queue (at one level)
      let size = queue.length;
      for (let i = 0; i < size; i++) {
        let curr = queue.shift();
        if (curr == target) return step;
        //process neighbors
        let neighbors = Array.from(graph.get(curr)) || [];
        for (let next of neighbors) queue.push(next);
      }
      step = step + 1;
    }
    return -1;
  };

  /**
   * Graph class
   */
  class Graph {
    constructor() {
      this.vertices = new Map();
    }
    addVertex(vertex) {
      if (!this.vertices.has(vertex)) this.vertices.set(vertex, new Set([]));
    }
    addVertex(vertex, edges=[]) {
      if (!this.vertices.has(vertex)) this.addVertex(vertex, edges)
      else this.vertices.get(vertex).add(...edges);
    }
    get(vertex) {
      if (this.vertices.has(vertex)) return this.vertices.get(vertex);
      else return null;
    }
  }

  let graph = new Graph();
  graph.addEdges(0, [1]);
  graph.addEdges(1, [2, 3]);
  graph.addEdges(2, [4]);
  graph.addEdges(3, [4, 5]);
  graph.addEdges(4, [5]);
  graph.addEdges(5, []);
  console.log(graph);

  console.log("Result: ", BFS(graph, 0, 3));
})();
