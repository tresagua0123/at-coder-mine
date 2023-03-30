const N = 2;
const input = [
  { t: 3, x: 1, y: 2 },
  { t: 6, x: 1, y: 6 },
];

let isReachable = true;
for (let i = 0; i < N; i++) {
  let input_zero = { t: 0, x: 0, y: 0 };
  const diff = {
    t: input[i].t - (input?.[i - 1]?.t || input_zero.t),
    x: input[i].x - (input?.[i - 1]?.x || input_zero.x),
    y: input[i].y - (input?.[i - 1]?.y || input_zero.y),
  };
  const t_parity = diff.t % 2 === 0;
  const sum_parity = (diff.x + diff.y) % 2 === 0;
  const is_parity_same = t_parity === sum_parity;
  if (diff.t < diff.x + diff.y || !is_parity_same) {
    isReachable = false;
  }
}

console.log(isReachable);
