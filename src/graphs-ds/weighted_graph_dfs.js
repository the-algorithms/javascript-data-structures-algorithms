//https://blog.bitsrc.io/data-structures-you-should-know-as-a-javascript-developer-9a35eb3b319c

// Usage

//Define the nodes
let A = new Node("A");
let B = new Node("B");
let C = new Node("C");
let D = new Node("D");
let E = new Node("E");
let F = new Node("F");
let G = new Node("G");

//Define how each node is related to others
A.linkTo(B, 1);
A.linkTo(C, 2);
B.linkTo(D, 1);
C.linkTo(E, 10);
D.linkTo(E, 10);
D.linkTo(F, 1);
D.linkTo(G, 1);
G.linkTo(G, 1);

let g = new Graph(A);
//Traverse the graph
g.dfs();

// Output
A;
B;
D;
E;
F;
G;
C;

class Node {
  constructor(value) {
    this.value = value;
    this.links = [];
  }

  linkTo(node, weight) {
    this.links.push(new Link(this, weight, node));
  }
}

class Link {
  constructor(a, weight, b) {
    this.left = a;
    this.weight = weight;
    this.right = b;
  }
}

class Graph {
  constructor(root_node) {
    this.root_node = root_node;
    this.dfs_visited = new Set();
  }

  dfs(starting_node) {
    if (!starting_node) starting_node = this.root_node;
    let node = starting_node;
    console.log(node.value);
    this.dfs_visited.add(node);
    node.links.forEach((neighbour) => {
      if (!this.dfs_visited.has(neighbour.right)) {
        this.dfs(neighbour.right);
      }
    });
  }
}
