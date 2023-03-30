const N = 1;
const X = [10, 100, 20, 50, 30];

for (let i = 0; i < N; i++) {
  const max = Math.max(...X);
  const maxIndex = X.findIndex((val) => val === max);
  X.splice(maxIndex, 1);
}

for (let i = 0; i < N; i++) {
  const min = Math.min(...X);
  const minIndex = X.findIndex((val) => val === min);
  console.log("min", min);
  console.log("minIn", minIndex);
  X.splice(minIndex, 1);
}

const totalCount = X.reduce((previous, current) => {
  return previous + current;
}, 0);

let result = totalCount / X.length;
console.log("res", result);
