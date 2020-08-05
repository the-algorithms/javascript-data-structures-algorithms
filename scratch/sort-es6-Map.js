let HashMap = new Map();
// [ [ -1, [ 9 ] ], [ 0, [ 3, 15 ] ], [ 1, [ 20 ] ], [ 2, [ 7 ] ] ]
result = new Map([...HashMap.entries()].sort((a, b) => a[0] - b[0]));
// Map(4) { -1 => [ 9 ], 0 => [ 3, 15 ], 1 => [ 20 ], 2 => [ 7 ] }


let map = new Map();
map.set('2-1', "foo");
map.set('0-1', "bar");
map.set('3-1', "baz");

// customSort Fn

var mapAsc = new Map([...map.entries()].sort());

console.log(mapAsc)