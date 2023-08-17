// //Using recursive approach

// function recursive(arr, x, start, end) {
//   if (start > end) return false;
//   let mid = Math.floor((start + end) / 2);

//   if (arr[mid] === x) return true;
//   if (arr[mid] > x) {
//     return recursive(arr, x, start, mid - 1);
//   } else {
//     return recursive(arr, x, mid + 1, end);
//   }
// }

// let arr = [1, 2, 4, 5, 7, 8];
// let arr1 = [1, 5, 4, 3, 7];
// let array = [1, 2, 4, 6, 7, 8];
// x = 5;

// console.log(recursive(arr, x, 0, arr.length - 1)); //sorted
// console.log(recursive(arr1, x, 0, arr1.length - 1)); //unsorted
// console.log(recursive(array, x, 0, array.length - 1));

//Using iterative approach;

let iterative = function (n, arr, x) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) return true;
    else if (arr[mid] < x) start = mid + 1;
    else end = mid - 1;
  }
  return false;
};

let arr = [1, 3, 5, 7, 13];
x = 7;
n = 5;

console.log(iterative(n, arr, x));
