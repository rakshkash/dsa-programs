/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// option 1 - using another variable
var merge = function (nums1, m, nums2, n) {
  let num1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (num1Copy[p1] < nums2[p2] && p1 < m)) {
      nums1[i] = num1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  console.log(nums1, "<---MERGE EX 1");
};
merge([1, 2, 3, 6, 0, 0, 0], 4, [2, 7, 8], 3);
merge([2, 0], 1, [1], 1);

//option 2 - using the same array - nums 1

var mergeUsingSameArray = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  console.log(nums1, "<---MERGE EX 2");
};

mergeUsingSameArray([1, 2, 3, 6, 0, 0, 0], 4, [2, 7, 8], 3);
mergeUsingSameArray([2, 0], 1, [1], 1);

//option 3 - using while loop

var mergeUsingWhile = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let k = m + n - 1;
  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[k--] = nums1[p1--];
    } else {
      nums1[k--] = nums2[p2--];
    }
  }
  console.log(nums1, "<---MERGE EX 3");
};
mergeUsingWhile([1, 2, 3, 6, 0, 0, 0], 4, [2, 7, 8], 3);
mergeUsingWhile([2, 0], 1, [1], 1);
