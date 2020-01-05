/**
 * Binary Search template 2
 *
 * @param {*} nums
 * @param {*} target
 */
const binarySearch = (nums, target) => {
  let left = 0,
    right = nums.length - 1;

  while (left + 1 < right) {
    let mid = left + Math.trunc((right - left) / 2);

    if (nums[mid] == target) return mid;
    else if (nums[mid] < target) left = mid;
    else right = mid;
  }
  // Post-processing
  // End condition: left + 1 == right
  if (nums[left] == target) return left;
  if (nums[right] == target) return right;
  return -1;
};

// Key Attributes:

// Distinguishing Syntax:
