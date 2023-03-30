const H = 4;
const W = 4;
const S_0 = "##.#.";
const S_1 = "##.#.";
const S_2 = "##.#.";
const S_3 = "##.#.";
const S_4 = "##.#.";

const SArray = [S_0, S_1, S_2, S_3, S_4];
const resultArray = [];

console.log("SA", SArray);

// SArray.forEach((val, index) => {

const getCount = (i, j) => {
  return (SArray?.[i]?.[j] === "#" ? 1 : 0) || 0;
};

for (let i = 0; i < SArray.length; i++) {
  resultArray.push([]);
  for (let j = 0; j < SArray[i].length; j++) {
    // if (SArray?.[i]?.[j] === "#") break;
    count =
      getCount(i - 1, j - 1) +
      getCount(i - 1, j) +
      getCount(i - 1, j + 1) +
      getCount(i, j - 1) +
      getCount(i, j + 1) +
      getCount(i + 1, j - 1) +
      getCount(i + 1, j) +
      getCount(i + 1, j + 1);

    resultArray[i].push(count);
    console.log(i, j, count);
  }
}

console.log("resultA", resultArray);

resultArray.forEach((val, index) => {
  console.log(val.join(""));
});
