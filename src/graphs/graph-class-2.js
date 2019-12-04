/**
 * Graph Class ADT
 * Data Structure C++ - Nell Dale
 */

class Graph {
  constructor(props, maxV = 50) {
    this.numVerticies = 0;
    this.maxVerticies = maxV;
    this.verticies = new Array(50);
    this.edges = new Array(50).fill(new Array(50)); //TODO: DONT DO THIS
    this.marks = new Array(50); // Visited array
  }

  // Post: vertex has been stored in vertices.
  //       Corresponding row and column of edges has been set to NULL_EDGE.
  //       numVertices has been incremented.
  AddVertex(vertex) {
    vertices[numVertices] = vertex;
    // Adjacency Matrix
    for (let index = 0; index < numVertices; index++) {
      edges[numVertices][index] = NULL_EDGE;
      edges[index][numVertices] = NULL_EDGE;
    }
    numVertices++;
  }

  // Post: Returns the index of vertex in vertices.
  IndexIs(vertices, vertex) {
    let index = 0;

    while (!(vertex == vertices[index])) index++;
    return index;
  }

  // Post: Edge (fromVertex, toVertex) is stored in edges.
  AddEdge(fromVertex, toVertex, weight) {
    let row;
    let col;

    row = IndexIs(vertices, fromVertex);
    col = IndexIs(vertices, toVertex);
    edges[row][col] = weight ? weight : 1;
  }

  // Post: Returns the weight associated with the edge
  //       (fromVertex, toVertex).
  WeightIs(fromVertex, toVertex) {
    let row;
    let col;

    row = IndexIs(vertices, fromVertex);
    col = IndexIs(vertices, toVertex);
    return edges[row][col];
  }

  // Post:
  GetToVerticies(vertex, adjVertices) {
    let fromIndex;
    let toIndex;

    fromIndex = IndexIs(vertices, vertex);
    for (toIndex = 0; toIndex < numVertices; toIndex++)
      if (edges[fromIndex][toIndex] != NULL_EDGE)
        adjVertices.Enqueue(vertices[toIndex]);
  }

  // ClearMarks(){}
  // MarkVertex(VertexType)
  // IsMarked(VertexType)
}
