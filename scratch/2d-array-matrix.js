const dp = new Array(m).fill(null).map(x => new Array(n).fill(0));
const dp = new Array(denom.length).fill(null).map(() => new Array(total + 1).fill(null));
const dp = new Array(m).fill(null).map(() => ({ length: 1, count: 1 }));

//
// Init matrix with infinities meaning that there is no ways of
    // getting from one vertex to another yet.
    const adjacencyMatrix = Array(vertices.length).fill(null).map(() => {
        return Array(vertices.length).fill(Infinity);
    }

//
const visited = new Array(nr);
for (var i = 0; i < visited.length; i++) 
visited[i] = new Array(nc).fill(false)
