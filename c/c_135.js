const N = 2;
const A = [3, 5, 2];
const B = [4, 5];

let count = 0;
B.forEach((val, index) => {
  let attack = val;
  if (attack > A[index]) {
    // nとの戦闘
    attack = attack - A[index];
    count = count + A[index];

    // n+1との戦闘
    count 

  } else if (attack <= A[index]) {
    Math.abs(attack - A[index]){
      count = count + attack;
    }
  }
});
