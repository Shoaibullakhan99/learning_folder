function compare(n, arr, x) {
  if (arr.includes(x)) {
    return arr.indexOf(x);
  }
  return arr.indexOf(x);
}

function compare(n, arr, x) {
  for (let i = 0; i < n; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}

console.log(compare(4, [1, 2, 3, 3, 4], 2));
