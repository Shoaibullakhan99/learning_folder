function doSomething(arr, queries) {
  let res = [];
  let n = queries.length;

  for (let i = 0; i <= n - 1; i++) {
    let start = queries[i][0];
    let end = queries[i][1];
    var sum = 0;

    for (let j = 0; j <= arr.length - 1; j++) {
      sum = arr[start] + arr[end];
    }
    res.push(sum);
  }
  return res;
}

let arr = [1, 3, 4, 5, 6, 7, 8, 9, 3, 2];
let queries = [
  [1, 3],
  [0, 2],
  [4, 6],
];

console.log(doSomething(arr, queries));

function doSomething(arr, queries) {
  let res = [];

  for (let i = 0; i < queries.length; i++) {
    let start = queries[i][0];
    let end = queries[i][1];
    let sum = arr[start] + arr[end];
    res.push(sum);
  }

  return res;
}

console.log(doSomething(arr, queries));

let value = 10;
let st = 5;
let sp = 5;

for (let i = 1; i < 5; i++) {
  value += st + sp;
}
console.log("value: ", value);
