# Graphs

A graph G=(V, E) is defiend by a set of vertices, V, and a set of edges, E,over pairs of vertices. There are three common types of graphs:

1. Undirected, Unweighted graphs
2. Directed Graphs
3. Weighted Graphs

## Data Structure for Graphs

### 1. Edge List

A list of all the edges in the graph:

```
graph = [[0, 1], [1, 2], [1, 3], [2, 3]]
```

### 2. Adjacency List

A list where the index represents the node and the value at that index is a list of the node's neighbors:

```
graph = [
    [1],
    [0, 2, 3],
    [1, 3],
    [1, 2],
]
```

Since node 3 has edges to nodes 1 and 2, graph[3] has the adjacency list [1, 2].
We could also use a Map object where the keys represent the node and the values are the lists of neighbors.

```
  graph = {
    0: [1],
    1: [0, 2, 3],
    2: [1, 3],
    3: [1, 2],
}
```

This would be useful if the nodes were represented by strings, objects, or otherwise didn't map cleanly to usual list indices.

### 3. Adjacency Map

### 4. Adjacency Matrix

### Graph Class Operations

vertex_count()
edge_count()
veritices()
edges()
get_edge(u, v)
degree(v)
incident_edges(v)
insert_vertex(x)
remove_vertex(v)
insert_edge(u,v,x
remove_edge(e)
print_path(G, s, v)

For Time Complexity, Refer screenshot with table

### Classification of Edges

1. Tree edges are edges in the depth-first forest G. Edge (u,v) is a tree edge if v was first discovered by exploring edge (u,v)
2. Back edges are those edges (u,v) connecting a vertex u to an ancestor v in a depth-first tree. We consider self-loops, which may occur in directed graphs, to be back edges.
3. Forward edges are those nontree edges (u,v) connecting a vertex u to a descendant v in a depth-first tree.
4. Cross edges are all other edges. They can go between vertices in the same depth-first tree, as long as one vertex is not an ancestor of the other, or they can go between vertices in different depth-first trees.
