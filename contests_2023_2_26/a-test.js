const S = "sdBdA"; // 1つ目の数字を a とする

let result = 0; // 結果を入れる用の変数

const isUpperCase = (str) => {
  const codeA = "A".charCodeAt();
  const codeZ = "Z".charCodeAt();
  const code = str.charCodeAt();
  return codeA <= code && code <= codeZ;
};

const getCapitalLetterLocation = () => {
  for (let i = 0; i < S.length; i++) {
    if (isUpperCase(S[i])) {
      result = i + 1;
      return;
    }
  }
};

getCapitalLetterLocation();
console.log(result);
