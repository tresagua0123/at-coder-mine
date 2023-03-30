const N = 8;
const Q = 3;
const S = "ACACTACG";
const lr_n = [
  [3, 7],
  [2, 3],
  [1, 8],
];

const getSn = (n) => {
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    if (S[i + 1] && S[i] + S[i + 1] === "AC") count++;
  }
  return count;
};

const getAns = () => {
  const arr = [];
  lr_n.forEach((val) => {
    S_0 = getSn(val[0]);
    S_1 = getSn(val[1]);
    arr.push(S_1 - S_0);
  });
  return arr;
};

console.log("arr", getAns());
