// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
// If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order.
// If no two numbers sum up to the target sum, the function should return an empty array.
// Note that the target sum has to be obtained by summing two different integers in the array; you can’t add a single integer to itself in order to obtain the target sum.
//  You can assume that there will be at most one pair of numbers summing up to the target sum.

// solution 1

function twoNumberSum(array, targetSum) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }

  return [];
}

//solution 2
function twoNumberSum(array, targetSum) {
  // Write your code here.
  const hashTable = new Map();

  for (let i = 0; i < array.length; i++) {
    hashTable.set(array[i], i);
  }

  for (let i = 0; i < array.length; i++) {
    const complement = targetSum - array[i];

    if (hashTable.has(complement) && hashTable.get(complement) !== i) {
      return [array[i], complement];
    }
  }

  return [];
}

//solution 3
function twoNumberSum(array, targetSum) {
  // Write your code here.
  const hashTable = new Map();

  for (const num of array) {
    const complement = targetSum - num;

    if (hashTable.has(complement)) {
      return [complement, num];
    }

    hashTable.set(num, true);
  }

  return [];
}
