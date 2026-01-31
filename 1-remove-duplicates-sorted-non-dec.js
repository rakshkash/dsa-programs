let arr = [0, 0, 1, 1, 2, 2, 3, 3, 3, 4];

function removeDupes(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x += 1;
      arr[x] = arr[i];
    }
  }
  console.log(arr);
  return x + 1;
}
let res = removeDupes(arr);
console.log(res, "<-- SORTED NON DECREASING Unique number");
