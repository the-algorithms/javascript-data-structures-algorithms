function all_subsets(s) {
	find(s, "");
}
function find(s, part) {
	if (s.length == 0) {
		console.log(part); 
	} else {
		find(s.substr(1), part + s.charAt(0));
		find(s.substr(1), part);
	}
}
all_subsets("abc");