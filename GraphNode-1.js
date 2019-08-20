class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

let graph = [];
{
  const nodeA = new GraphNode("A");
  const nodeB = new GraphNode("B");
  const nodeC = new GraphNode("C");
  const nodeD = new GraphNode("D");
  nodeA.neighbors.add(nodeB);
  nodeB.neighbors.add(nodeA);
  nodeB.neighbors.add(nodeC);
  nodeC.neighbors.add(nodeB);
  nodeC.neighbors.add(nodeD);
  nodeD.neighbors.add(nodeC);
  graph = [nodeA, nodeB, nodeC, nodeD];
}

/***
 * Graph Adjacency List
 */

// Tests
const graph = {
  a: ["b", "c", "d"],
  b: ["a", "d"],
  c: ["a", "e"],
  d: ["a", "b"],
  e: ["c"],
  f: ["g"],
  g: ["f"]
};
