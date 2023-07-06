const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 3, 5, 7, 9];

//Using filter and includes..
const difference = array1.filter((element) => !array2.includes(element));

//Using for loop and indexOf..
function arrDiff(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      result.push(a[i]);
    }
  }
  return result;
}

//Using set and filter..
const set1 = new Set(array1);
const set2 = new Set(array2);

console.log("set1: ", set1);
console.log("set2: ", set2);

console.log("[...set1]: ", [...set1]);
const newDiff = [...set1].filter((element) => !set2.has(element));

//Using reduce and indexOf
const diff = array1.reduce((result, element) => {
  if (array2.indexOf(element) === -1) {
    result.push(element);
  }
  return result;
}, []);

console.log("arrDiff: ", arrDiff(array1, array2));
console.log("difference: ", difference);
console.log("newDiff: ", newDiff);
console.log("diff: ", diff);
