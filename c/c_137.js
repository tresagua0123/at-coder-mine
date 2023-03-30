const N = 3;
const Arr = ["acornistnt", "peanutbomb", "constraint"];

const resultObj = {};

Arr.forEach((val) => {
  const sortedStr = val.split("").sort().join("");
  resultObj[sortedStr] = (resultObj[sortedStr] || 0) + 1;
});

let result = 0;
for (const [key, value] of Object.entries(resultObj)) {
  console.log("key, val", key, value);
  result = result + (value * (value - 1)) / 2;
}

console.log("res", result);
