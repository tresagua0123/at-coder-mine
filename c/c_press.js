const str = "AAABBBBBAACDD";

for (let i = 0; i < str.length; ) {
  let j = i;
  while (str[j] === str[i] && j < str.length) {
    j = j + 1;
  }
  console.log(str[i], j - i);
  i = j;
}
