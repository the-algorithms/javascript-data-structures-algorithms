/**
 * Binary Search template 1
 *
 * @param {*} nums
 * @param {*} target
 */
const binarySearch = (nums, target) => {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.trunc((right - left) / 2);

    if (nums[mid] == target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  // End condition: left > right
  return -1;
};

// Key Attributes:

// Distinguishing Syntax:
