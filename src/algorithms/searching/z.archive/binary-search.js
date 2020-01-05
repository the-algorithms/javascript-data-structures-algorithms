/*
 * Binary Search
 */

// Example 1
function binarySearch(target, nums) {
  // See if target appears in nums

  // We think of floorIndex and ceilingIndex as "walls" around
  // the possible positions of our target, so by -1 below we mean
  // to start our wall "to the left" of the 0th index
  // (we *don't* mean "the last index")
  let floorIndex = -1;
  let ceilingIndex = nums.length;

  // If there isn't at least 1 index between floor and ceiling,
  // we've run out of guesses and the number must not be present
  while (floorIndex + 1 < ceilingIndex) {
    // Find the index ~halfway between the floor and ceiling
    // We have to round down, to avoid getting a "half index"
    const distance = ceilingIndex - floorIndex;
    const halfDistance = Math.floor(distance / 2);
    const guessIndex = floorIndex + halfDistance;

    const guessValue = nums[guessIndex];

    if (guessValue === target) {
      return true;
    }

    if (guessValue > target) {
      // Target is to the left, so move ceiling to the left
      ceilingIndex = guessIndex;
    } else {
      // Target is to the right, so move floor to the right
      floorIndex = guessIndex;
    }
  }

  return false;
}

// Example 2
let binary_search = function(a, key) {
  let low = 0;
  let high = a.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (a[mid] === key) {
      return mid;
    }

    if (key < a[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

let array_for_binary_search = [
  10,
  20,
  47,
  59,
  63,
  75,
  88,
  99,
  107,
  120,
  133,
  155,
  162,
  176,
  188,
  199,
  200,
  210,
  222
];

console.log("Key(47) found at: " + binary_search(array_for_binary_search, 47));
console.log("Key(75) found at: " + binary_search(array_for_binary_search, 75));
console.log(
  "Key(175) found at: " + binary_search(array_for_binary_search, 175)
);
