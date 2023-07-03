const num = [7, 1, 5, 1];
const num1 = num.sort((a, b) => a - b);
console.log(num1);
const target = 8;

findIndices = (num, target) => {
  const map = new Map();

  for (let i = 0; i < num.length; i++) {
    const compliment = target - num[i];
    if (map.has(compliment)) {
      return [map.get(compliment), i];
    }
    map.set(num[i], i);
  }
  return [0, 0];
};

console.log(findIndices(num1, target));
