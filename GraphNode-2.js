// Graph Node ADT ////////////////////////////////////////////////

class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}
