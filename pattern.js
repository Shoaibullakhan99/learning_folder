let n = 5;
function str(n) {
  let result = [];
  let string = "";
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      string += " *";
    }
    string += "\n";
  }
  string.split("\n");
  return string;
}

console.log(str(n));

function strArray(n) {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      string += " *";
    }
    string += "\n";
  }
  return string.split("\n").splice(0, 4);
}

console.log(strArray(n));

// function resultant() {
//   let arr = strArray(n);
//   arr.forEach((line) => console.log(line));
// }

// resultant();
