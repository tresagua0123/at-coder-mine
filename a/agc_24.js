const [A, B, C, K] = [1, 2, 3, 1];

const first = A - B;
const isEven = K % 2 === 0;
const answer = isEven ? first : first * -1;

console.log(answer);
