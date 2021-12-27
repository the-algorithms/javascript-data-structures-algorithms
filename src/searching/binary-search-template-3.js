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
/*
int binarySearch(vector<int>& nums, int target){
  if (nums.size() == 0)
      return -1;

  int left = 0, right = nums.size() - 1;
  while (left + 1 < right){
      // Prevent (left + right) overflow
      int mid = left + (right - left) / 2;
      if (nums[mid] == target) {
          return mid;
      } else if (nums[mid] < target) {
          left = mid;
      } else {
          right = mid;
      }
  }

  // Post-processing:
  // End Condition: left + 1 == right
  if(nums[left] == target) return left;
  if(nums[right] == target) return right;
  return -1;
}
*/
// Key Attributes:

// Distinguishing Syntax:
// Initial Condition: left = 0, right = length-1
// Termination: left + 1 == right
// Searching Left: right = mid
// Searching Right: left = mid
