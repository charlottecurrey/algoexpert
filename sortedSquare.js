// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

function sortedSquaredArray(array) {
  // Write your code here.
  const sortedSquares = new Array(array.length);
  let smallerValueIdx = 0;
  let largerValueIdx = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    const smallerValue = array[smallerValueIdx];
    const largerValue = array[largerValueIdx];

    if (Math.abs(smallerValue) >= Math.abs(largerValue)) {
      sortedSquares[i] = smallerValue * smallerValue;
      smallerValueIdx++;
    } else {
      sortedSquares[i] = largerValue * largerValue;
      largerValueIdx--;
    }
  }

  return sortedSquares;
}

//solution 2

function sortedSquaredArray(array) {
  const positiveSquares = [];
  const negativeSquares = [];

  for (const value of array) {
    const square = value * value;

    if (value < 0) {
      negativeSquares.push(square);
    } else {
      positiveSquares.push(square);
    }
  }

  return mergeSortedArrays(positiveSquares, negativeSquares);
}

function mergeSortedArrays(ascendingArray, descendingArray) {
  const merged = new Array(ascendingArray.length + descendingArray.length);
  let ascendingIdx = 0;
  let descendingIdx = descendingArray.length - 1;

  for (let i = 0; i < merged.length; i++) {
    const ascendingItem = ascendingArray[ascendingIdx] ?? Infinity;
    const descendingItem = descendingArray[descendingIdx] ?? Infinity;

    if (ascendingItem < descendingItem) {
      merged[i] = ascendingItem;
      ascendingIdx++;
    } else {
      merged[i] = descendingItem;
      descendingIdx--;
    }
  }

  return merged;
}
