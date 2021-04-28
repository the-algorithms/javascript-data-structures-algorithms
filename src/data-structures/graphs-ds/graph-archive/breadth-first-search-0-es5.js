var BFS = function(graph) {
  var vertices = graph.getVertices();
  if (vertices.length === 0) {
    return;
  }

  // Mark all vertices as NOT VISITED at start
  var visited = {};
  for (var i = 0; i < vertices.length; i++) {
    visited[vertices[i]] = false;
  }

  var queue = [];
  var startV = vertices[0];
  queue.push(startV);
  visited[startV] = true;

  while (queue.length > 0) {
    // Inefficient. use the Wueue that
    // we created in Queue tutorial
    var v = queue.shift();
    console.log("Visited: " + v);
    var edges = graph.getEdges(v);

    for (var i = 0; i < edges.length; i++) {
      var e = edges[i];
      if (!visited[e]) {
        queue.push(e);
        visited[e] = true;
      }
    }
  }
};

// Run following code to see BFS in action
var graph = new Graph();
graph.addVertex("Anna");
graph.addVertex("Bob");
graph.addVertex("Frank");
graph.addVertex("Jane");

graph.addEdges("Anna", ["Bob", "Frank"]);
graph.addEdges("Bob", ["Anna", "Frank"]);
graph.addEdges("Frank", ["Anna", "Bob", "Jane"]);
graph.addEdges("Jane", ["Frank"]);

BFS(graph);
