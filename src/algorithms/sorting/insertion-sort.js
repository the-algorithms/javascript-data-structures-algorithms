/*
 * Insertion Sort
 * Time Complexity: Worst: O(n*2)
 * Space Complexity
 *
 */
const InsertionSort = A => {
  for (let pos = 0; pos < A.length; ++pos)
  Insert(A, pos, A[pos]);
};

const Insert = (A, pos, val) => {
  let i = pos - 1;
  while (i >= 0 && A[i] > val) {
    A[i + 1] = A[i];
    i--;
  }
  A[i + 1] = val;
};

const A = [3, 4, 6, 1, 2, 9, 5];
InsertionSort(A);
//console.log(A)
