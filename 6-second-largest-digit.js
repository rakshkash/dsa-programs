/**
 * Problem: Second Largest Digit in a String
 *
 * Given an alphanumeric string `s`, return the second largest numerical digit
 * that appears in the string. If a second largest digit does not exist, return -1.
 *
 * An alphanumeric string consists of lowercase English letters and digits.
 *
 * Approach:
 * 1. Traverse the string character by character.
 * 2. Ignore non-digit characters.
 * 3. Convert digit characters to numbers.
 * 4. Track two variables:
 *      - `largest` → the largest digit found so far
 *      - `secondLargest` → the second largest digit
 * 5. Update values while iterating through digits.
 * 6. Return `secondLargest` at the end.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * Example 1:
 * Input:  "dfa12321afd"
 * Digits present: [1,2,3]
 * Output: 2
 *
 * Example 2:
 * Input:  "abc1111"
 * Digits present: [1]
 * Output: -1
 *
 * @param {string} s
 * @return {number}
 */

/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let largest = -1, secondLargest = -1 ;
    for ( let ch of s){
        if(!isNaN(ch)){
            let num = Number(ch)
            if( num>largest){
                secondLargest = largest
                largest = num
            }
            else if( num>secondLargest && num !== largest ){
                secondLargest = num
            }
        }
    }
return secondLargest
    
};
