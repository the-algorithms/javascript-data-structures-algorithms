/*
 * Merge Sort - Merge with Divide And Conquer
 * Time Complexity: Worst: O(nlogn)
 * Space Complexity: O(n)
 *
 */

const merge_sort = list => {
  // Base case: single element list
  if (list.length == 1) return list;

  // Split the input in half
  const middle_index = Math.trunc(list.length / 2);
  const left = list.slice(0, middle_index);
  const right = list.slice(middle_index + 1);

  // Sorted each half
  const left_sorted = merge_sort(left);
  const right_sorted = merge_sort(right);

  // merge the sorted list
  return combine_sorted_list(left_sorted, right_sorted);
};

const combine_sorted_list = (list_one, list_two) => {
  let list_one_index = 0;
  let list_two_index = 0;
  const merged_list = [];

  // Both lists have some items left in them
  while (list_one_index < list_one.length && list_two_index < list_two.length) {
    // Choose the smaller of the two items and add it to the merged list
    if (list_one[list_one_index] <= list_two[list_two_index]) {
      merged_list.push(list_one[list_one_index]);
      list_one_index++;
    } else {
      merged_list.push(list_two[list_two_index]);
      list_two_index++;
    }
  }

  // Grab any lingering items (IF) in the first half after we have exhausted the second list
  while (list_one_index < list_one.length) {
    if (list_one[list_one_index] <= list_two[list_two_index]) {
      merged_list.push(list_one[list_one_index]);
      list_one_index++;
    }
  }

  // Grab any lingering items (IF) in the second half after we have exhausted the first list
  while (list_two_index < list_two.length) {
    if (list_two[list_two_index] <= list_one[list_one_index]) {
      merged_list.push(list_two[list_two_index]);
      list_two_index++;
    }
  }

  return merged_list;
};
