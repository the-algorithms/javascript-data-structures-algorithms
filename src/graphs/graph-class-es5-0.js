function Graph() {
  this._vertices = {};
  this._vertexCount = 0;
}

// Adding a Vertex to Graph
Graph.prototype.addVertex = function(v) {
  var vertexType = typeof v;

  if (vertexType != "number" && vertexType != "string") {
    throw "Vertex can only be a string or number";
  }

  if (this._vertices.hasOwnProperty(v)) {
    throw "Duplicate Vertex is not allowed";
  }

  this._vertices[v] = {};
  this._vertexCount++;
};

// Adding Edges to a vertex
Graph.prototype.addEdges = function(v, edges) {
  if (!this._vertices.hasOwnProperty(v)) {
    throw "Vertex not found";
  }

  var edgesObj = this._vertices[v];

  for (var i = 0; i < edges.length; i++) {
    var edge = edges[i];

    if (this._vertices.hasOwnProperty(v)) {
      throw "Invalid vertex cannot be added as edge";
    }

    edgesObj[edge] = true;
  }
};

// Getters for Vertices and Edges
Graph.prototype.getVertices = function() {
  var vertices = [];
  for (var v in this._vertices) {
    vertices.push(v);
  }

  return vertices;
};

Graph.prototype.getEdges = function(v) {
  if (!this._vertices.hasOwnProperty(v)) {
    throw "Vertex not found";
  }

  var edgesObj = this._vertices[v];
  var edges = [];

  for (var e in edgesObj) {
    edges.push(e);
  }

  return edges;
};

// Let's see our Graph code in action
var graph = new Graph();
graph.addVertex("Anna");
graph.addVertex("Bob");
graph.addVertex("Frank");
graph.addVertex("Jane");

graph.addEdges("Anna", ["Bob", "Frank"]);
graph.addEdges("Bob", ["Anna", "Frank"]);
graph.addEdges("Frank", ["Anna", "Bob", "Jane"]);
graph.addEdges("Jane", ["Frank"]);

var vertices = graph.getVertices();
for (var i = 0; i < vertices.length; i++) {
  var edges = graph.getEdges(vertices[i]);
  console.log(vertices[i] + " is friends with " + edges);
}
