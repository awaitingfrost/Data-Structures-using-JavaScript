//BubbleSort implementation in JS
const numbers = [99, 45, 23, 11, 87, 55, 12, 34, 87, 65, 243, 4, 0];
function bubbleSort(array) {
  const length = array.lenth;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);

// Time complexity O(n^2) [two loops(n*n) nested inside] [n inputs in array]
// Space complexity O(n)  [n inputs in array takes n units of memory]
