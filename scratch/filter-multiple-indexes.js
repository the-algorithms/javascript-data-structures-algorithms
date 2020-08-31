var indegree = [1,0,0,4,2,5,0];
var filt = indegree.reduce((acc, val, ind, arr) => (val == 0 ? [...acc, ind] : acc), []);
console.log(filt)