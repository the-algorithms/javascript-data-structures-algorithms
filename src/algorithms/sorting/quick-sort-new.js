/**
 * Quick Sort
 * 
 * Quicj sort sorts a list by choosing a pivot and comparing each element to that pivot.
 * Implement Quick sort algorithm using Hoare’s Partitioning scheme.
 * 
 */

const partitionHoare = (array, left, right) => {
  const pivot = Math.floor(Math.random() * (right - left + 1) + left)
  
  while (left <= right) {
    while (array[left] < array[pivot])
       left++;
    while (array[right] > array[pivot])
      right--;

    if (left <= right) {
      [array[left], array[right]] = [array[right], array[left]];
      left++;
      right--;
    }
  }
  return left;
}

const quickSort = (array, left = 0, right = array.length - 1) => {
 
  const pivot = partitionHoare(array, left, right);

  if (left < pivot - 1) quickSort(array, left, pivot - 1);
  if (right > pivot) quickSort(array, pivot, right);

  return array;
}


let array = [2,1,7,0,9,4,6,5];
array = quickSort(array);
console.log(array);