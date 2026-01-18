/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let y = Math.abs(x);
  let rev = 0;
  let limit = Math.pow(2, 31);
  while (y > 0) {
    let lastDig = y % 10;
    y = Math.floor(y / 10);
    rev = 10 * rev + lastDig;
  }
  rev = x > 0 ? rev : rev * -1;
  if (rev > limit - 1 || rev < -limit) {
    return 0;
  }
  return rev;

  // OR
  //     if(rev>(limit-1) || rev < -limit ){
  //         return 0
  //     }
  //    return  x>0?rev:rev*-1
};

console.log(reverse(-1223345));
console.log(reverse(1223345));
