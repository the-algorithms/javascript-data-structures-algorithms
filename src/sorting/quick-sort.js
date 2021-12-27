/*
 * Quick Sort
 * Time Complexity: 
 *      Best: O(lognN): if the pivot happens to be the median value on the list. It ends up contructing a balanced binary search tree; height of tree - O(logN)
 *      Avg: O(NlogN)
 *      Worst: O(N*2): If the pivot is an extreme value/ in the already sorted list
 * Space Complexity
 *
 */

(function main() {
  
    const partition = (input, lo, hi) => {
      // Pick always the last element as the pivot
      // and return the index of the pivot value in the sorted array
      const pivot = input[hi];
      let i = lo;
      
      for (let j = lo; j < hi; j++) {
        
        if (input[j] < pivot) {
          
          let tmp = input[i];
          input[i] = input[j];
          input[j] = tmp;
          i++;
        }
      }
      
      let tmp = input[hi];
      input[hi] = input[i];
      input[i] = tmp;
      return i;
    }
    
    const qSort = (input, lo, hi) => {
      if (input.length <= 1) return input;
  
      if (lo < hi) {
        const p = partition(input, lo, hi);
        qSort(input, lo, p - 1);
        qSort(input, p + 1, hi);
      }
    }
    
    const quickSort = (input) => {
      const n = input.length;
      
      qSort(input, 0, n - 1);
    }
    
    const arr1 = [3,6,7,8,1,9,2,4,5,0];
    //quickSort(arr1);
    //console.log(arr1);
    
    // Version 2 - Hackerrank
    const quickSort_2 = (arr) => {
      if (arr.length <= 1) return arr;
      
      let left = [],
            right = [],
            // pick the first element as the pivot
            pivot = arr[0];
      
      for (let i = 1; i < arr.length; i++) {
        
        if (arr[i] < pivot)
          left.push(arr[i]);
        else
          right.push(arr[i]);
      }
      
      const sortedLeft = quickSort_2(left),
            sortedRight = quickSort_2(right);
      
      const sorted = [].concat(sortedLeft, pivot, sortedRight);
      console.log(sorted)
      return sorted;
    }
    
    //const input2 = [3,6,7,8,1,9,2,4,5,0];
    //quickSort_2(input2)
    
    // Version 3 - Hackerrank
    const qs = arr => {
      if (arr.length <= 1) return arr;
      
      let r = [].concat(
        qs(arr.slice(1).filter(d => d < arr[0])),
        arr[0],
        qs(arr.slice(1).filter(d => d > arr[0]))
      );
      console.log(...r);
      return r;
    }
    
    const input3 = [3,6,7,8,1,9,2,4,5,0];
    qs(input3);
  }());