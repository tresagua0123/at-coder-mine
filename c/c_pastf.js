const str = "FisHDoGCaTAAAaAAbCAC";
const resultArr = [];

for (let i = 0; i < str.length; ) {
  let j = i + 1;
  while (str[j] === str[j].toLowerCase() && j < str.length) {
    j = j + 1;
  }
  resultArr.push(str.substring(i, j + 1));
  i = j + 1;
}

console.log(
  resultArr
    .sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1))
    .join("")
);
