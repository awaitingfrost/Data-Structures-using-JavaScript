// InsertionSort using Js
function insertionSort(array) {
  length = array.length; //length of array which is 5 in this example
  for (i = 1; i < length; i++) {
    var temp = array[i];
    for (j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }

  console.log(array);
}
const number = [2, 13, 7, 45, 3];
insertionSort(number);

// Time complexity O(n^2) Because two loops (n*n) required for n inputs in array
// Space complexity O(n) Because for n inputs in an array , we get n memory units for it.
