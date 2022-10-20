function rotateArray(array, k) {
  // Given an array, rotate the array to the right
  // by k steps, where k is non-negative.

  const result = [];
  array.forEach((item, index) => {
    let rotateIndex = index + k;
    if (rotateIndex >= array.length) rotateIndex = rotateIndex % array.length;
    result[rotateIndex] = item;
  });

  return result;
}

const input = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

console.log(rotateArray(input, k));