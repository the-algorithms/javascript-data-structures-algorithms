//Graphs (Implementation)
// add a vertex, add an edge, print graph

class Graph {
  constructor() {
    this.numberOfVertices = 0;
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, []);
    this.numberOfVertices++;
  }

  addEdge(vertex1, vertex2) {
    this.adjList.get(vertex1).push(vertex2);
    this.adjList.get(vertex2).push(vertex1);
  }
}

/* {
  { 3: [5] },
  { 5: [3] }
} */

print() {
    const keys = this.adjList.keys();
    for (let i of keys) {
      const values = this.adjList.get(i);
      let value = "";
      for (let j of values) {
        value += j + " ";
      }
      console.log(`${i} => ${value}`);
    }
  }

  // 5 => 3 
  // 3 => 5