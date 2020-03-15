/**
 * Merge Sort
 * 
 * Merge sort uses "divide and conquer" and sort lists by breaking them down, 
 * sorting them and then merging the sorted lists.
 */

 // APPROACH 1

 const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(
    mergeSort(left),  
    mergeSort(right));
};

const merge = (left, right) => {
  let result = [], leftIndex = 0, rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex])
      result.push(left[leftIndex++]);
    else
      result.push(right[rightIndex++]);
  }

  return result
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

// APPROACH 2

const merge1 = (left, right) => {
  let merged_list, index1 = 0, index2 = 0;

  while (index1 < left.length && index2 < right.length) {
    if (left[index1] <= right[index2]) 
      merged_list.push(left[index1++]);
    else 
      merged_list.push(right[index2++]);
  }

  while (index1 < left.length) merged_list.push(left[index1++]);
  
  while (index2 < right.length) merged_list.push(right[index2++]);

  return merged_list;
};

const mergeSort1 = arr => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left_sorted = MergeSort1(arr.slice(0, mid));
  let right_sorted = MergeSort1(arr.slice(mid));

  return merge1(left_sorted, right_sorted);
};

 let array = [2,1,7,0,9,4,6,5];
 array = mergeSort1(array);
 console.log(array);