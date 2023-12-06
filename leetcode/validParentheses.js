// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(s) {
  // Initialize an empty stack to store open brackets
  const stack = [];

  // Define a mapping to easily check corresponding closing brackets
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // Loop through each character in the input string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // If the current character is an open bracket, push it onto the stack
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      // If the current character is a closing bracket, check if it matches the
      // corresponding open bracket at the top of the stack
      const top = stack.pop(); // Pop the top element from the stack

      // If there is no corresponding open bracket or it doesn't match, the string is invalid
      if (top !== mapping[char]) {
        return false;
      }
    }
  }

  // At the end of the loop, check if there are any remaining open brackets in the stack
  // If there are, the string is invalid; otherwise, it's valid
  return stack.length === 0;
}

// alternate solution (best one)
const pairs = {
  "(": ")",
  "[": "]",
  "{": "}",
};

var isValid = function (s) {
  for (var i = 0; i < s.length; i++) {
    if (i == s.length) {
      break;
    }

    //s[i] //first letter
    //s[i+1] //next letter
    //pairs[s[i]] //i give them first letter return me  matching value

    if (s[i] in pairs && s[i + 1] !== pairs[s[i]]) {
      return false;
    }
  }

  return true;
};

// another solution

var isValid = function (s) {
  let i = 0; //0 2 4
  while (i < s.length) {
    if (parentheses.charAt(0) === s.charAt(i)) {
      if (parentheses.charAt(1) !== s.charAt(i + 1)) {
        return false;
      }
      i = i + 2;
    } else if (square.charAt(0) === s.charAt(i)) {
      if (square.charAt(1) !== s.charAt(i + 1)) {
        return false;
      }
      i = i + 2;
    } else if (braces.charAt(0) === s.charAt(i)) {
      if (braces.charAt(1) !== s.charAt(i + 1)) {
        return false;
      }
      i += 2;
    }
  }
  return true;
};
