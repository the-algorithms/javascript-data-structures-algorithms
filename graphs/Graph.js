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
