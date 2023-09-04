function jobSchedulingBruteForce(startTime, endTime, profit) {
  const n = startTime.length;

  function findMaxProfit(index) {
    if (index >= n) return 0;

    let profitIfIncluded = profit[index];
    for (let i = index + 1; i < n; i++) {
      if (startTime[i] >= endTime[index]) {
        profitIfIncluded += findMaxProfit(i);
        break;
      }
    }

    const profitIfExcluded = findMaxProfit(index + 1);

    return Math.max(profitIfIncluded, profitIfExcluded);
  }

  return findMaxProfit(0);
}

const startTime = [1, 2, 3, 3];
const endTime = [3, 4, 5, 6];
const profit = [50, 10, 40, 70];

console.log(jobSchedulingBruteForce(startTime, endTime, profit));
//exponential time complexity , not suitable for large inputs

// Optimized approach using dynamic programming
//tc o(n*logn)
function jobscheduling(startTime, endTime, profit) {
  const jobs = [];
  const n = startTime.length;

  for (let i = 0; i < n; i++) {
    jobs.push({
      startTime: startTime[i],
      endTime: endTime[i],
      profit: profit[i],
    });
  }

  jobs.sort((a, b) => a.endTime - b.endTime);
  console.log(jobs);

  const dp = new Array(n);
  dp[0] = jobs[0].profit;
  console.log("dp1:", dp);

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(jobs[i].profit, dp[i - 1]);

    for (let j = i - 1; j >= 0; j--) {
      if (jobs[j].endTime <= jobs[i].startTime) {
        dp[i] = Math.max(dp[i], dp[j] + jobs[i].profit);
        console.log(dp);
        break;
      }
    }
  }
  return dp[n - 1];
}

console.log(jobscheduling(startTime, endTime, profit));
