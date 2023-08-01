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
