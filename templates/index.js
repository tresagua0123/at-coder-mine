"use strict";
function Main(input) {
  // 入力された文字列を半角スペース区切りで分割
  const split = input.split(" ");

  const Y = split[0]; // 1つ目の数字を a とする
  const N = split[1]; // 2つ目の数字を b とする

  let result; // 結果を入れる用の変数

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

  console.log(getPair());

  console.log(result);
}
//標準入力から文字を受け取ってメイン関数を実行
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
