// Time complexity O(nxn) space complexity O(1)

function addSum(arr, goal) {
  let n = arr.length;
  let result = [];
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === goal) {
        result.push(i, j);
      }
    }
  }
  return result;
}

const arr = [1, 2, 3, 4, 5];
const goal = 6;

const result = addSum(arr, goal);
console.log(result);

//Time complexity O(n) ans space complexity O(n);
//using hashmap

function addSumBest(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const compliment = target - arr[i];

    if (map.has(compliment)) {
      return [map.get(compliment), i];
    }
    map.set(arr[i], i);
  }
}

console.log(addSumBest(arr, 5));

// Search or Insert position of K in a sorted array

function seachAndInsert(arr, k) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === k) {
      return i;
    } else if (arr[i] > k) {
      return i;
    }
  }
  return n;
}

console.log(seachAndInsert(arr, 2));
