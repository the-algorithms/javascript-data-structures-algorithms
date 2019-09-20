/*
 * Merge Sort
 * Time Complexity: Worst: O(nlogn)
 * Space Complexity: O(n)
 *
 */

const merge_sort = list => {
  // Base case: single element list
  if (list.length == 1) return list;

  // Split the input in half
  const middle_index = Math.trunc(list.length / 2);
  const left = list.slice(0, middleIndex);
  const right = list.slice(middle_index + 1);

  // Sorted each half
  const left_sorted = merge_sort(left);
  const right_sorted = merge_sort(right);

  // merge the sorted list
  return combine_sorted_list(left_sorted, right_sorted);
};

const combine_sorted_list = (list1, list2) => {
  let list_one_index = 0;
  let list_two_index = 0;
  const merged_list = [];

  // Both lists have some items left in them

  // Choose the smaller of the two items and add it to the merged list

  // Grab any lingering items (IF) in the first half after we have exhausted the second list

  // Grab any lingering items (IF) in the second half after we have exhausted the first list

  return merged_list;
};
