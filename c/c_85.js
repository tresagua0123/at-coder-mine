const Y = 45000;
const N = 9;
let result = {
  a: -1,
  b: -1,
  c: -1,
};

const getPair = () => {
  for (let a = 0; a < N; a++) {
    for (let b = 0; b < N; b++) {
      c = N - a - b;
      if (c < 0 || c > N) break;
      for (let c = 0; c < N; c++) {
        if (a * 10000 + b * 5000 + c * 1000 === Y) {
          result = Object.assign(result, { a, b, c });
        }
      }
    }
  }
  return result;
};

getPair();
