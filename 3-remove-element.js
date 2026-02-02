/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// [2,3,3,1,2,4,5,6,7,3]
var removeElement = function (nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x++;
    }
  }
  console.log(nums, "<--ORIG-ARRAY");
  return x;
};
let arr1 = [2, 3, 3, 1, 2, 4, 5, 6, 7, 3];
let arr2 = [1, 2, 3, 1, 1, 4, 6, 1];
console.log(removeElement(arr1, 3));
console.log(removeElement(arr2, 1));
