https://see.stanford.edu/Course/CS107/221
http://web.mit.edu/6.005/www/fa16/classes/14-recursion/

function all_subsets(s) {
	find("", s);
}
function find(partial, s) {
	if (s.length == 0) {
		console.log(partial); 
	} else {
    find(partial, s.substring(1));
		find(partial + s.charAt(0), s.substring(1));
	}
}
all_subsets("abc");

function all_subsets(s) {
	return find("", s);
}
function find(partial, s) {
	if (s.length == 0) {
		return partial;
	} else {
    return find(partial, s.substring(1))
    + ","
	+ find(partial + s.charAt(0), s.substring(1));
	}
}
all_subsets("abc");

var subsets = function(nums) {
    
  if (nums.length == 0) {
    return [[]];
  } else {
    const partialSubsets = subsets(nums.slice(1));
    const allSubset = [];
    for (let subset of partialSubsets)
    {
      allSubset.push(subset);
      allSubset.push([ nums[0], ...subset ]);
    }
    return allSubset;
  }
};

subsets([1,2,3])
/////////////////////////////////////////////////
def powerset(a):
    # returns a list of all subsets of the list a
    if (len(a) == 0):
        return [[]]
    else:
        allSubsets = [ ]
        for subset in powerset(a[1:]):
            allSubsets += [subset]
            allSubsets += [[a[0]] + subset]
        return allSubsets
 
print(powerset([1,2,3]))

// print all subsets of the remaining elements, with given prefix 
private static void comb1(String prefix, String s) {
  if (s.length() > 0) {
      StdOut.println(prefix + s.charAt(0));
      comb1(prefix + s.charAt(0), s.substring(1));
      comb1(prefix,               s.substring(1));
  }
}  

// alternate implementation
public static void comb2(String s) { comb2("", s); }
private static void comb2(String prefix, String s) {
    StdOut.println(prefix);
    for (int i = 0; i < s.length(); i++)
        comb2(prefix + s.charAt(i), s.substring(i + 1));
} 