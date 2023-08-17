function setfunc(n, nums) {
  const set = new Set();

  for (let i = 0; i < n; i++) {
    set.add(nums[i]);
    console.log(set.add(nums[i]));
  }
  return set.size;
}

console.log(setfunc(5, [1, 1, 2, 2, 3]));

function intersect(n, nums1, m, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  while (i < n && j < m) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[j] < nums2[i]) {
      j++;
    } else {
      return;
    }
  }
}

const nums1 = [5, 2, 4, 1, 3, 12, 24, 59, 71];
const nums2 = [7, 5, 9, 3, 10, 1, 2, 4, 24, 12];

const n = 5;
const m = 5;

console.log(printIntersection(n, nums1, m, nums2));

function printIntersection(n, arr1, m, arr2) {
  let result = [];
  arr1.sort(function (a, b) {
    return a - b;
  });
  arr2.sort(function (a, b) {
    return a - b;
  });
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) i++;
    else if (arr2[j] < arr1[i]) j++;
    else {
      result.push(arr2[j]);
      //   console.log(arr2[j++] + " ");
      i++;
    }
  }
  return result;
}

function intersect(n, num1, m, num2) {
  let inter = [];
  let nointersection = [];
  for (let i of num1) {
    if (num2.includes(i)) {
      inter.push(i);
    }
  }
  return inter.sort((a, b) => a - b);
}

console.log(intersect(n, nums1, m, nums2));
