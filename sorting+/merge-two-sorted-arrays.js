var merge = function(nums1, nums2) {
  let list1 = nums1.slice();
  nums1.length = [];

  let list_one_index = 0;
  let list_two_index = 0;

  while (list_one_index < list1.length && list_two_index < nums2.length) {
    if (list1[list_one_index] <= nums2[list_two_index]) {
      nums1.push(list1[list_one_index]);
      list_one_index++;
    } else {
      nums1.push(nums2[list_two_index]);
      list_two_index++;
    }
  }

  // Grab leftovers in the first half after we have exhausted the second list
  while (list_one_index < list1.length) {
    nums1.push(list1[list_one_index]);
    list_one_index++;
  }

  // Grab leftovers in the second half after we have exhausted the first list
  while (list_two_index < nums2.length) {
    nums1.push(nums2[list_two_index]);
    list_two_index++;
  }

  return nums1;
};
