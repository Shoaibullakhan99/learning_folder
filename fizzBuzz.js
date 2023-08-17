function find(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    let value = "";

    if (i % 3 === 0) {
      value += "fizz";
    }
    if (i % 5 === 0) {
      value += "buzz";
    }
    if (value === "") {
      value = i;
    }
    result.push(value);
  }
  const newResult = result.join(" ");
  return newResult;
}

console.log(find(15));

// 10 ^ 9;
