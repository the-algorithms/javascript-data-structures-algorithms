// Template 1

const binarySearch = (nums, target) => {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.trunc((right - left) / 2);

    if (nums[mid] == target) return mid;
    else if (target > nums[mid]) left = mid + 1;
    else right = mid - 1;
  }

  // No post processing required
  return -1;
};
// Distinguishing Syntax:
// Initial Condition: left: 0; right: length
// Termination: left > right
// Searching Left:  mid - 1
// Searching Right: mid + 1

// Template 2

const binarySearch = (nums, target) => {
  let left = 0,
    right = nums.length;

  while (left < right) {
    let mid = left + Math.trunc((right - left) / 2);

    if (nums[mid] == target) return mid;
    else if (target > nums[mid]) left = mid + 1;
    else right = mid;
  }

  // Post processing
  if (left != nums.length && nums[left] == target) return left;
  return -1;
};

// Distinguishing Syntax:
// Initial Condition: left = 0; right = length
// Termination: left == right
// Searching Left: right = mid
// Searching Right: left = mid + 1

// Template 3

const binarySearch = (nums, target) => {
  let left = 0,
    right = nums.length - 1;

  while (left + 1 < right) {
    let mid = left + Math.trunc((right - left) / 2);

    if (nums[mid] == target) return mid;
    else if (target > nums[mid]) left = mid;
    else right = mid;
  }

  //Post processing
  if (nums[left] == target) return left;
  if (nums[right] == right) return right;
  return -1;
};

// Distinguishing Syntax:
// Initial Condition: left = 0, right = length - 1
// Termination: left + 1 == right
// Searching Left: right = mid;
// Searching Right: left = mid;
