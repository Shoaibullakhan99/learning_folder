function findIndices(num, target) {
  let n = num.length;
  let lh = 0;
  let rh = n - 1;
  while (lh < rh) {
    if (num[lh] + num[rh] > target) {
      rh--;
    } else if (num[lh] + num[rh] < target) {
      lh++;
    } else if (num[lh] + num[rh] == target) {
      return true;
    }
  }

  return false;
}

let num = [1, 3, 5, 7, 9, 11];
let target = 2;

console.log(findIndices(num, target));
