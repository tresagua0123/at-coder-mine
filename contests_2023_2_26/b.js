"use strict";
function Main(input) {
  const args = input.split("\n");
  const numbers = args[1].split(" ");

  const N = parseInt(args[0]);
  const X = numbers.map((n) => parseInt(n));

  for (let i = 0; i < N; i++) {
    const max = Math.max(...X);
    const maxIndex = X.findIndex((val) => val === max);
    X.splice(maxIndex, 1);
  }

  for (let i = 0; i < N; i++) {
    const min = Math.min(...X);
    const minIndex = X.findIndex((val) => val === min);
    X.splice(minIndex, 1);
  }

  const totalCount = X.reduce((previous, current) => {
    return previous + current;
  }, 0);

  let result = totalCount / X.length;
  console.log(result);
}
//標準入力から文字を受け取ってメイン関数を実行
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
