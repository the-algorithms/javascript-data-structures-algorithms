const dp = new Array(m).fill(null).map(() => ({ length: 1, count: 1 }));

const visited = new Array(nr);
for (var i = 0; i < visited.length; i++) visited[i] = new Array(nc).fill(false);
