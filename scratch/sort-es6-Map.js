let map = new Map();
map.set('2-1', "foo");
map.set('0-1', "bar");
map.set('3-1', "baz");

// customSort Fn

var mapAsc = new Map([...map.entries()].sort());

console.log(mapAsc)