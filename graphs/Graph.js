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
      this.graph.set(u, []); //this.graph.set(Array.of(v))
      this.graph.get(u).push(v);
    }
  }
}

module.exports = Graph;

// Driver code
// Create a graph given in the above diagram
var myGraph = new Graph(6);
myGraph.addEdge(0, 1);
myGraph.addEdge(1, 2);
myGraph.addEdge(1, 3);
myGraph.addEdge(2, 4);
myGraph.addEdge(3, 4);
myGraph.addEdge(3, 5);
