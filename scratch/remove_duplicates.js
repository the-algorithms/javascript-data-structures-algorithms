// remove duplicates from sorted array
// [0,0,1,1,1,2,2,3,3,4]
var removeDuplicates = nums => nums.splice(0, nums.length, ...new Set(nums)).length;

var arr = [2, 1, 3, 2, 5, 6, 7, 2, 3];

arr = arr.filter((num, index) => arr.indexOf(num) === index);
arr.sort();
console.log(arr);
//

var arr1 = [2, 1, 3, 2, 5, 6, 7, 2, 3];

const res7 = arr => [...new Set(arr)].sort();
console.log(res7(arr1));
//

var arr = [2, 1, 3, 2, 5, 6, 7, 3];
var uniques = [];
arr.forEach(num => {
  if (!uniques.includes(num)) uniques.push(num);
});
console.log(uniques);
//

var arr1 = [2, 1, 3, 2, 5, 6, 7, 2, 3];

const res21 = arr =>
  arr.reduce(
    (output, num) => (output.includes(num) ? output : [...output, num]),
    []
  );

console.log(res21(arr1).sort());
