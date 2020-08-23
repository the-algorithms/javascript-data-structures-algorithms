/**
 * Bubble Sort
 * 
 * Bubble sort sorts an array, by swapping elements that are in the wrong order.
 */

const bubbleSort = arr => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }

  } while (swapped);
  return arr;
}

let array = [2,1,8,4,7,5,0]
array = bubbleSort(array)
console.log(array);