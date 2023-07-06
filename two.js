function threeSum(nums) {
  let result = [];
  let n = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;

        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else if (sum < 0) {
        j++;
      } else k--;
    }
    return { ...result };
  }
}

const array = [-5, -5, 4, 5, 1, 0, 5, -4];
console.log(threeSum(array));

/*
  first unsorted array is required, then the length of array should be calculated,
  then sort the array in ascending order, then loop through i elements, upto n - 2,
  because there are 3 pair of elements, initialize j and k as i + 1 and n - 1 respectively 
  and while j < k check if there sum is 0;
  and continue to find the elements.....
*/
