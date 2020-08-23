/**
 * Insertion Sort
 * 
 * With insertion sort, you move an element that’s not in the 
 * right position all the way to the point where it should be.
 */

const insertionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = temp;
  }
  return arr;
 }

 let array = [2,1,7,0,9,4,6,5];
 array = insertionSort(array);
 console.log(array);