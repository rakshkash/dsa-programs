function findIfPalindrome(word, opt) {
  if (typeof word !== "string") {
    return "only string expected!";
  }
  // option 1 - use str reverse
  if (opt === 1) {
    strRev = word.split("").reverse().join("");
    if (strRev === word) {
      return true;
    }
  }
  if (opt !== 1) {
    let newWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      newWord += word[i];
    }
    console.log(newWord);
    if (word === newWord) {
      return true;
    }
  }
  return false;
}

// function to find palindrome of a number using mathematical operations

function findByMathIfPalindrome(num) {
  let orig = num;
  if (num < 0) {
    return false;
  }
  if (!Number.isInteger(num)) {
    return false;
  }

  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    num = Math.floor(num / 10);
    rev = 10 * rev + rem;
  }
  return orig === rev;
}
console.log("<--PALINDROME NUMBER == STRING BASED");

// console.log("<------Palindraome without string reverse");
// console.log(findIfPalindrome("abc"));
// console.log(findIfPalindrome("madam"));
// console.log(findIfPalindrome("a"));
// console.log(findIfPalindrome("aabbaa"));
// console.log(findIfPalindrome(1));
// console.log("<------Palindraome with string reverse");
// console.log(findIfPalindrome("abc", 1));
// console.log(findIfPalindrome("madam", 1));
// console.log(findIfPalindrome("a", 1));
// console.log(findIfPalindrome("aabbaa", 1));
// console.log(findIfPalindrome(1, 1));
console.log("<--PALINDROME NUMBER == MATHEMATICALLY");

console.log(findByMathIfPalindrome(11));
console.log(findByMathIfPalindrome(1));
console.log(findByMathIfPalindrome(121));
console.log(findByMathIfPalindrome(-11));
console.log(findByMathIfPalindrome(1.1));
console.log(findByMathIfPalindrome(14531));
console.log(findByMathIfPalindrome(0));
