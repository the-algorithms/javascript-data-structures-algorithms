//Combinations and Permutations with an Intro to Backtracking
// https://medium.com/@NickMa38/combinations-and-permutations-with-an-intro-to-backtracking-d940683ea9de


const combine = (nums, k) => {
    let combinations = new Set();
  
    const backtracking = (path, depth, options) => {
      
      if (depth == 0) {
        combinations.add(path.slice());
      }
      else {
        for (let [index, num] of options.entries()) {
          path.push(num);
          backtracking(path, depth - 1, options.slice(index + 1))
          path.pop();
        }
      }
    }
  
    backtracking([], k, nums);
    return combinations
  }
  
  let arr = ['a','b','c','d', 'e', 'f'], k = 2;
  console.log(combine(arr, k));
  
/*
from typing import List;

class Solution:
    
    def combine(self, n: int, k: int) -> List[List[int]]:
        nums = list(range(1, n + 1))
        combinations = []
        
        def backtracking(results, path, depth, options):
            if depth == 0:
                results.append(path[:])
            else:
                for index, num in enumerate(options):
                    path.append(num)
                    backtracking(results, path, depth - 1, options[index + 1:])
                    path.pop()
                    
        backtracking(combinations, [], k, nums)
            
        return combinations

print(Solution.combine(Solution, 4, 2))
*/

// Other Resources
// https://www.rosettacode.org/wiki/Combinations#ES6