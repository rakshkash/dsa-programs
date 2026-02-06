/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let min = prices[0];
  let maxP = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > maxP) {
      maxP = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return maxP;
}

const ex1 = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(ex1, "<---1");
const ex2 = maxProfit([7, 6, 4, 3, 1]);
console.log(ex2, "<---2");
