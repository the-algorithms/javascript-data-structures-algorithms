var DFS = function(graph) {
  var vertices = graph.getVertices();
  if (vertices.length === 0) {
    return;
  }

  // Mark all vertices as NOT VISITED at start
  var visited = {};
  for (var i = 0; i < vertices.length; i++) {
    visited[vertices[i]] = false;
  }

  // Define our DFS impl method
  function DFSImpl(v) {
    visited[v] = true;
    console.log("Visiting Vertex: " + v);

    var edges = graph.getEdges(v);
    for (var j = 0; j < edges.length; j++) {
      var edge = edges[j];
      if (!visited[edge]) {
        DFSImpl(edge);
      }
    }
  }

  // Start DFS
  for (var i = 0; i < vertices.length; i++) {
    var vertex = vertices[i];
    if (!visited[vertex]) {
      DFSImpl(vertex);
    }
  }
};

// Run the following code to see DFS in action
var graph = new Graph();
graph.addVertex('Anna');
graph.addVertex('Bob');
graph.addVertex('Frank');
graph.addVertex('Jane');

graph.addEdges('Anna', ['Bob', 'Frank']);
graph.addEdges('Bob', ['Anna', 'Frank']);
graph.addEdges('Frank', ['Anna', 'Bob', 'Jane']);
graph.addEdges('Jane', ['Frank']);

DFS(graph);
