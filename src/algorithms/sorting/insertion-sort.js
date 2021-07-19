/*
 * Insertion Sort
 * Time Complexity: Worst: O(n*2)
 * Space Complexity
 *
 */
const InsertionSort = array => {
  for (let pos = 0; pos < array.length; ++pos)
  Insert(array, pos, array[pos]);
};

const Insert = (array, pos, val) => {
  let i = pos - 1;
  while (i >= 0 && array[i] > val) {
    
    array[i + 1] = array[i];
    i--;
  }
  array[i + 1] = val;
};

const A = [3, 4, 6, 1, 2, 9, 5];
InsertionSort(A);
//console.log(A)
