//Count the number of digits in a given number

//solution1 - using string conversion - supports decimal count
function countDigitsThroughStringConversion(num, opt) {
  if (typeof num !== "number" || isNaN(num)) {
    return "Invalid input";
  }
  //opt1 = count decimal digits
  if (opt == 1) {
    num = Math.abs(num);
    return num.toString().replace(".", "").length;
  }
  //opt2 = do not count decimal digits
  else {
    num = Math.abs(num);
    num = Math.floor(num);
    return num.toString().length;
  }
}

// solution 2 - doesnt support decimal count, but is a faster solution, due to pure mathematical operation and avoid string conversion
function CountDigits(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return "Invalid input!";
  }
  if (num == 0) {
    return 1;
  }
  let count = 0;
  num = Math.abs(num);
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

console.log("USING NON STRING METHOD");
console.log(CountDigits(-123456));
console.log(CountDigits(-121.11));
console.log(CountDigits(9234));
console.log(CountDigits(0));
console.log(CountDigits("uiui"));
console.log("________");
console.log("USING STRING METHOD");
console.log(countDigitsThroughStringConversion(-123456));
console.log(countDigitsThroughStringConversion(-121.11, 1));
console.log(countDigitsThroughStringConversion(-121.11));
console.log(countDigitsThroughStringConversion(9234));
console.log(countDigitsThroughStringConversion(0));
console.log(countDigitsThroughStringConversion("uiui"));
