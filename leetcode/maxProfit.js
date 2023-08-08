// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// solution
let maxProfit = function (prices) {
  // Initialize variables to keep track of the minimum price to buy and the maximum profit achievable.
  let buy = prices[0]; // Initialize buy as the price on the first day.
  let maxProfit = 0; // Initialize maxProfit as 0.

  // Iterate through the array of prices, starting from the second day.
  for (let i = 1; i < prices.length; i++) {
    // Check if the profit gained by selling on the current day is greater than the maximum profit.
    if (prices[i] - buy > maxProfit) {
      maxProfit = prices[i] - buy; // Update maxProfit with the new higher profit.
    }

    // Check if the current day's price is lower than the previously known minimum buy price.
    if (prices[i] < buy) {
      buy = prices[i]; // Update the minimum buy price to the current day's price.
    }
  }

  // Return the maximum profit achieved.
  return maxProfit;
};
