/**
 * Counting Sort
 * 
 * Counting sort is a sorting algorithm that works by calculating 
 * the positions of each element in the output sequence.
 */

 const countingSort = (arr, min, max) => {
  let count = [];
      z = 0;

  for (let i = min; i <= max; i++)
    count[i] = 0

  for (let i = 0; i < array.length; i++)
    count[arr[i]]++;

  for (let i = min; i <= max; i++) {
    while (count[i]-- > 0)
      arr[z++] = i;
  }
  console.log(arr)
  return arr;
 }

 let array = [4,2,1,8,5,1,2];
 array = countingSort(array, Math.min(...array), Math.max(...array));
 console.log(array);