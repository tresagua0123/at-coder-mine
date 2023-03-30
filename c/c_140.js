const N = 3;
const B = [2, 5];

let a_total = 0;

for (let i = 0; i < N; i++) {
  if (i === 0) a_total = a_total + B[0];
  if (i > 0) {
    if (B[i] && B[i - 1]) a_total = a_total + Math.min(B[i], B[i - 1]);
    if (B[i] && !B[i - 1]) a_total = a_total + B[i];
    if (B[i - 1] && !B[i]) a_total = a_total + B[i - 1];
  }

  console.log("total", a_total);
}
