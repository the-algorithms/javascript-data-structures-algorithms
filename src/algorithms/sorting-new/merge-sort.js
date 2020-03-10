/**
 * Merge Sort
 * 
 * Merge sort uses "divide and conquer" and sort lists by breaking them down, 
 * sorting them and then merging the sorted lists.
 */

const merge1 = (left, right) => {
  let index1 = 0, index2 = 0;
  const merged_list = [];

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

const MergeSort1 = arr => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left_sorted = MergeSort1(arr.slice(0, mid));
  let right_sorted = MergeSort1(arr.slice(mid));

  return merge1(left_sorted, right_sorted);
};

 let array = [2,1,7,0,9,4,6,5];
 array = MergeSort1(array);
 console.log(array);