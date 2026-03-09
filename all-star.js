// Square fill pattern
console.log("-- SQAURE FILL PATTERN --");
let r1 = 5;
for (let i = 0; i < r1; i++) {
  let row = " ";
  for (let j = 0; j < r1; j++) {
    row += "* ";
  }
  console.log(row);
}
console.log("---------");

// Square fill pattern
console.log("-- HOLLOW SQUARE PATTERN --");
let r2 = 5;
for (let i = 0; i < r2; i++) {
  let row = " ";
  for (let j = 0; j < r2; j++) {
    if (i === 0 || i === r2 - 1 || j === 0 || j === r2 - 1) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}
console.log("---------");

// Right half pyramid star pattern
console.log("-- RIGHT HALF PYRAMID PATTERN --");
let r3 = 5;
for (let i = 0; i < r3; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
console.log("---------");

// Reverse Right half pyramid star pattern
console.log("-- REVERSE RIGHT HALF PYRAMID PATTERN --");
let r4 = 5;
for (let i = r4; i > 0; i--) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += "* ";
  }
  console.log(row);
}
console.log("---------");

// Left half pyramid star pattern
console.log("-- LEFT HALF PYRAMID PATTERN --");
let r5 = 5;
for (let i = 0; i < r3; i++) {
  let row = "";
  for (let sp = r5 - 1; sp > i; sp--) {
    row += "  ";
  }
  for (let j = 0; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
console.log("---------");

// Reverse Left half pyramid star pattern
console.log("-- REVERSE LEFT HALF PYRAMID PATTERN --");
let r6 = 5;
for (let i = r6; i > 0; i--) {
  let row = "";
  for (let sp = 0; sp < r6 - i; sp++) {
    row += "  ";
  }
  for (let j = 0; j < i; j++) {
    row += "* ";
  }

  console.log(row);
}
console.log("---------");

// Number increasing pyramid
console.log("-- NUMBER INCREASING PYRAMID PATTERN --");
let r7 = 5;
for (let i = 0; i < r7; i++) {
  let row = " ";
  let num = 1;
  for (let j = 0; j <= i; j++) {
    row += " " + num;
    num++;
  }
  console.log(row);
}
console.log("---------");

// Reverse Number increasing pyramid
console.log("-- REVERSE NUMBER INCREASING PYRAMID PATTERN --");
let r8 = 5;
for (let i = r8; i > 0; i--) {
  let row = " ";
  let num = 1;
  for (let j = 0; j < i; j++) {
    row += " " + num;
    num++;
  }
  console.log(row);
}
console.log("---------");

//  Number increasing and changing pyramid
console.log("-- NUMBER INCREASING PYRAMID PATTERN --");
let r9 = 4;
let num = 1;
for (let i = 0; i <= r9; i++) {
  let row = " ";
  for (let j = 0; j < i; j++) {
    row += " " + num;
    num++;
  }
  console.log(row);
}
console.log("---------");

//  Zero One pyramid
console.log("-- ZERO ONE PYRAMID PATTERN --");
let r10 = 5;
let alter_num = 0;
for (let i = 0; i <= r9; i++) {
  let row = " ";
  for (let j = 0; j < i; j++) {
    if ((i + j) % 2 !== 0) {
      row += " " + 1;
    } else {
      row += " " + 0;
    }
  }
  console.log(row);
}
console.log("---------");

//  K Pattern
console.log("-- K PATTERN --");
let r11 = 5;
for (let i = r11; i > 0; i--) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += "* ";
  }
  console.log(row);
}
for (let i = 0; i < r11; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
console.log("---------");

// Number triangle
console.log("-- NUMBER TRIANGLE --");
let r12 = 5;
let num1 = 0;
for (let i = 0; i < r12; i++) {
  let row = "";
  num1++;
  for (let sp = r12 - i - 1; sp > 0; sp--) {
    row += " ";
  }
  for (let j = 0; j <= i; j++) {
    row += " " + num1;
  }
  console.log(row);
}

//number increasing traingle
console.log("-- NUMBER INCREASING ROW TRIANGLE --");
let r13 = 5;
for (let i = 0; i < r13; i++) {
  let row = "";
  let num = 0;
  for (let sp = r13 - i - 1; sp > 0; sp--) {
    row += " ";
  }
  for (let j = 0; j <= i; j++) {
    row += " " + ++num;
  }
  console.log(row);
}

//number increasing traingle
console.log("-- NUMBER INCREASING TRIANGLE --");
let r14 = 4;
let num2 = 0;
for (let i = 0; i < r14; i++) {
  let row = "";
  for (let sp = r14 - i - 1; sp > 0; sp--) {
    row += " ";
  }
  for (let j = 0; j <= i; j++) {
    row += " " + ++num2;
  }
  console.log(row);
}

//Triangle star pattern
console.log("-- STAR TRIANGLE PATTERN--");
let r15 = 5;
for (let i = 0; i < r15; i++) {
  let row = "";
  for (let sp = r15 - i - 1; sp > 0; sp--) {
    row += " ";
  }
  for (let j = 0; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

//Hollow star triangle
console.log("-- STAR HOLLOW TRIANGLE --");
let r16 = 5;
for (let i = 0; i < r16; i++) {
  let row = "";
  for (let sp = r16 - i - 1; sp > 0; sp--) {
    row += " ";
  }
  for (let j = 0; j <= i; j++) {
    if (i == 0 || i == r16 - 1 || j == 0 || j == i) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}

//Inverted Hollow star triangle
console.log("-- STAR INVERTED HOLLOW TRIANGLE PATTERN--");
let r17 = 5;
for (let i = r17; i > 0; i--) {
  let row = "";
  for (let sp = r17 - i; sp > 0; sp--) {
    row += " ";
  }
  for (let j = 0; j < i; j++) {
    if (i == r17 || i == 1 || j == 0 || j == i - 1) row += "* ";
    else row += "  ";
  }
  console.log(row);
}

//Diamond Pattern
console.log("-- HOLLOW DIAMOND STAR PATTERN --");
let r18 = 5;
for (let i = 0; i < r18; i++) {
  let row = "";
  let num = 0;
  for (let sp = r18 - i - 1; sp > 0; sp--) {
    row += " ";
  }
  for (let j = 0; j <= i; j++) {
    if (i == 0 || j == 0 || j == i) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}
for (let i = r18 - 1; i > 0; i--) {
  let row = "";
  for (let sp = r18 - i; sp > 0; sp--) {
    row += " ";
  }
  for (let j = 0; j < i; j++) {
    if (i == 1 || j == 0 || j == i - 1) row += "* ";
    else row += "  ";
  }
  console.log(row);
}

// hollow hourglass pattern
console.log("- HOLLOW HOUR GLASS PATTERN --");
let r19 = 5;
for (let i = r19; i > 0; i--) {
  let row = "";
  for (let sp = r19 - i; sp > 0; sp--) {
    row += " ";
  }
  for (let j = 0; j < i; j++) {
    if (i == r19 || i == 1 || j == 0 || j == i - 1) row += "* ";
    else row += "  ";
  }
  console.log(row);
}
for (let i = 1; i < r19; i++) {
  let row = "";
  for (let sp = r19 - i - 1; sp > 0; sp--) {
    row += " ";
  }
  for (let j = 0; j <= i; j++) {
    if (i == 0 || i == r19 - 1 || j == 0 || j == i) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}

// reverse number triangle pattern
console.log("-- REVERSE NUMBER TRIANGLE PATTERN --");
let r20 = 5;
for (let i = 0; i < r20; i++) {
  let row = "";
  let num = i;
  for (let sp = 0; sp < i; sp++) {
    row += " ";
  }
  for (let j = r20 - i; j > 0; j--) {
    row += " " + ++num;
  }
  console.log(row);
}

//mirror image problem
console.log("-- MIRROR IMAGE NUMBER PATTERN --");
let r21 = 5;
for (let i = 0; i < r21; i++) {
  let row = "";
  let num = i;
  for (let sp = 0; sp < i; sp++) {
    row += " ";
  }
  for (let j = r20 - i; j > 0; j--) {
    row += " " + ++num;
  }
  console.log(row);
}
for (let i = r21 - 2; i >= 0; i--) {
  let row = "";
  let num = i;
  for (let sp = 0; sp < i; sp++) {
    row += " ";
  }
  for (let j = r20 - i; j > 0; j--) {
    row += " " + ++num;
  }
  console.log(row);
}

//rhombus problem
console.log("-- RHOMBUS PATTERN --");
let r22 = 5;
for (let i = 0; i < r22; i++) {
  let row = "";
  for (let sp = 0; sp < i; sp++) {
    row += " ";
  }
  for (let j = 0; j < r22 + 1; j++) {
    row += "* ";
  }
  console.log(row);
}

// palindrome pattern
console.log("-- PALINDROME PATTERN TRIANGLE --");
let r23 = 5;
for (let i = 0; i < r23; i++) {
  let row = " ";
  for (let sp = r23 - i; sp > 0; sp--) {
    row += "  ";
  }
  for (let j = i; j >= 1; j--) {
    row += " " + j;
  }
  for (let j = 2; j <= i; j++) {
    row += " " + j;
  }
  console.log(row);
}

//odd triangle
console.log("-- ODD TRIANGLE --");
r24 = 5;
for (let i = 0; i < r24; i++) {
  let row = "";
  let num = 0;
  for (s = r24 - i; s > 0; s--) {
    row += "  ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    row += " " + ++num;
  }
  console.log(row);
}

// right pascal's triangle
console.log("-- RIGHT PASCALS'S TRIANGLE --");
let r25 = 5;
let n = 0;
for (let i = 1; i <= 2 * r25 - 1; i++) {
  if (i <= r25) {
    n = i;
  } else {
    n = 2 * r25 - i;
  }
  let row = "";
  for (let j = 0; j < n; j++) {
    row += " *";
  }
  console.log(row);
}

//butterfly pattern
console.log("-- BUTTERFLY PATTERN --");

let nn = 4;

// upper half
for (let i = 1; i <= nn; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "*";
  }

  for (let j = 1; j <= 2 * (nn - i); j++) {
    row += " ";
  }

  for (let j = 1; j <= i; j++) {
    row += "*";
  }

  console.log(row);
}

// lower half
for (let i = nn - 1; i >= 1; i--) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "*";
  }

  for (let j = 1; j <= 2 * (nn - i); j++) {
    row += " ";
  }

  for (let j = 1; j <= i; j++) {
    row += "*";
  }

  console.log(row);
}

//number increasing traingle
console.log("-- NUMBER INCREASING TRIANGLE --");
let r26 = 5;
for (let i = 0; i < r26; i++) {
  let row = "";
  let n = 1;
  for (let sp = r26 - i; sp > 0; sp--) {
    row += " ";
  }
  for (let j = 0; j <= i; j++) {
    row += " " + n;
    n = (n * (i - j)) / (j + 1);
  }
  console.log(row);
}
