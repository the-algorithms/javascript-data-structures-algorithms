/**
 * Selection Sort
 * 
 * Selection sort works by finding the minimum, and then comparing 
 * each element to that minimum to decide its correct position
 */

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    
    for (let j = i + 1; j < arr.length; j++)
      if (arr[j] < arr[min]) min = j;

    if (i !== min)
      [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
 }

 let array = [2,1,7,0,9,4,6,5];
 array = selectionSort(array);
 console.log(array);