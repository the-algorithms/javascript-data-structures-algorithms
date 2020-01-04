const helper = (elems) => {
  
    if (elems.length == 1)
      return [elems];
   
    else {
      const first = elems.shift();
      let remains = helper(elems);
      let arr = [];
      for (let perm of remains) {
        for (let pos = 0; pos <= perm.length; pos++) {
          const permutation = [...perm.slice(0, pos), first, ...perm.slice(pos)];
          arr.push(permutation)
        }   
      }
      return arr;
    }
  }
  
  const permute = (elems) => {
    return helper(elems, [])
  }

//
def permutations(a):
    # returns a list of all permutations of the list a
    if (len(a) == 0):
        return [[]]
    else:
        allPerms = [ ]
        for subPermutation in permutations(a[1:]):
            for i in range(len(subPermutation)+1):
                allPerms += [subPermutation[:i] + [a[0]] + subPermutation[i:]]
        return allPerms
 
print(permutations([1,2,3]))