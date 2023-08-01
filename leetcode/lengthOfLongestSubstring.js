// Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function (s) {
  /**
   * @param {string} s
   * @return {number}
   */

  //1 loop throught
  //4 check if letter is in store
  //5 true keep going
  //6 false store letter
  //7 check if letter is in store
  // false start another array

  //let store = new Map();
  let store = [[]];
  let currentStore = 0;

  console.log("check", store[currentStore]);
  for (let i = 0; i < s.length; i++) {
    //1

    if (store[currentStore].length > 0 && store[currentStore].includes(s[i])) {
      //4
      store.push([]);
      currentStore++;
    } else {
      store[currentStore].push(s[i]);
    }
  }

  let winner = store[0];

  for (let i = 1; i < store.length; i++) {
    if (store[i].length > winner.length) {
      winner = store[i];
    }
  }

  return winner.length;

  /*
    // keeps track of the most recent index of each letter
    const seen = new Map();
    // keeps track of the starting index of the current substring
    let start = 0;
    // keeps track of the maximum substring length
    let maxLength = 0;

    for(let i = 0; i < s.length; i++){
        // if the current character was seen, move the start to (1 + the last index of this character)
        // max prevents moving backward, 'start' can only move forward
        if(seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start)
        seen.set(s[i], i);
        // maximum of the current substring length and maxLength
        maxLength = Math.max(i - start +1, maxLength);
    }
    return maxLength;
    */

  /*
  // keeps track of the most recent index of each letter
  const seen = new Map();
  // keeps track of the starting index of the current substring
  let start = 0;
  // keeps track of the maximum substring length
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    // if the current character was seen, move the start to (1 + the last index of this character)
    // max prevents moving backward, 'start' can only move forward
    if (seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start);
    seen.set(s[i], i);
    // maximum of the current substring length and maxLength
    maxLength = Math.max(i - start + 1, maxLength);
  }
  return maxLength;*/
};

console.log(
  lengthOfLongestSubstring("abca"),
  lengthOfLongestSubstring("bbbb"),
  lengthOfLongestSubstring("pkewwe")
);
