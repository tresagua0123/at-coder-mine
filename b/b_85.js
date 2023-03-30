const N = 5;
const d = [1, 2, 2, 3, 1];

const array = [];
for (let i = 0; i < N; i++) {
  if (!array.includes(d[i])) array.push(d[i]);
}

console.log(array.length);
