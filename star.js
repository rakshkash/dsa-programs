//square star pattern

for (let i = 0; i < 5; i++) {
  let line = " ";
  for (let j = 0; j < 5; j++) {
    line += "* ";
  }
  console.log(line);
}

console.log(" --------- ");

//hollow square star pattern
for (let i = 0; i < 5; i++) {
  let line = " ";
  for (let j = 0; j < 5; j++) {
    if (i === 0 || j === 0 || i === 4 || j === 4) {
      line += "* ";
    } else {
      line += "  ";
    }
  }
  console.log(line);
}
console.log(" --------- ");

// right angle triangle star pattern

let n = 5;
for (let i = 0; i < n; i++) {
  let line = " ";
  for (let j = 0; j <= i; j++) {
    line += "* ";
  }
  console.log(line);
}
console.log(" --------- ");

for (let i = n; i >= 0; i--) {
  let line = " ";
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line);
}
console.log(" --------- ");
//  triangle star pattern

for (let i = 1; i <= n; i++) {
  let line = " ";
  for (let sp = 0; sp < n - i; sp++) {
    line += " ";
  }
  for (let j = 0; j < i; j++) {
    line += "* ";
  }
  console.log(line);
}
console.log(" --------- ");

//  triangle star pattern

for (let i = n; i >= 1; i--) {
  let line = " ";
  for (let sp = 0; sp < n - i; sp++) {
    line += " ";
  }
  for (let j = 0; j < i; j++) {
    line += "* ";
  }
  console.log(line);
}
console.log(" --------- ");

//  triangle star pattern

for (let i = 1; i <= n; i++) {
  let line = " ";
  for (let sp = 0; sp < n - i; sp++) {
    line += "  ";
  }
  for (let j = 0; j < i; j++) {
    line += "* ";
  }
  console.log(line);
}
console.log(" --------- ");

//  triangle star pattern

for (let i = n; i >= 1; i--) {
  let line = " ";
  for (let sp = 0; sp < n - i; sp++) {
    line += "  ";
  }
  for (let j = 0; j < i; j++) {
    line += "* ";
  }
  console.log(line);
}
console.log(" --------- ");
