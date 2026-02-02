/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let calStr = s.length / 2;
  for (let i = 0; i < calStr; i++) {
    let swap = s[s.length - 1 - i];
    s[s.length - 1 - i] = s[i];
    s[i] = swap;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o", "o"]));
console.log(reverseString(["t", "w", "i", "s", "t"]));
