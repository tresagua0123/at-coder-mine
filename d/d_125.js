const N = 5;
const A = [-1, -10, 8, -4, 5];

let minus_count = 0;
let min_abs = 10 ** 9;

for (let i = 0; i < A.length; i++) {
  if (Math.abs(A[i]) < min_abs) min_abs = Math.abs(A[i]);
  if (A[i] < 0) minus_count++;
}

console.log("count, min", minus_count, min_abs);
const totalAbs = A.reduce(
  (previous, current) => previous + Math.abs(current),
  0
);

console.log("totalAbs", totalAbs);
