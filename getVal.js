const memo = new Map();

async function generate(n) {
  const response = await fetch(`https://rio_sample_api/${n}`);
  const data = await response.json();
  return data.num;
}

async function f(n) {
  if (n === 0 || n === 1) {
    return 2;
  }

  if (memo.has(n)) {
    return memo.get(n);
  }

  const result = await generate(n);
  memo.set(n, result);
  return result;
}

async function fn(n) {
  if (n === 0 || n === 1) {
    return 2;
  }

  const fn_1 = await f(n - 1);
  const fn_2 = await f(n - 2);
  return fn_1 + fn_2;
}

// 使用例
(async () => {
  const result = await fn(5);
  console.log(result);
})();
