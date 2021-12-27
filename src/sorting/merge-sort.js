const merge = (left, right) => {
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

const MergeSort = arr => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left_sorted = MergeSort(arr.slice(0, mid));
  let right_sorted = MergeSort(arr.slice(mid));

  return merge(left_sorted, right_sorted);
};

const sortArray = function(nums) {
  return MergeSort(nums);
};
