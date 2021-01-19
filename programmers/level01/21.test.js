// 내적

function solution1(a, b) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}

function solution2(a, b) {
  return a.reduce((acc, curr, i) => acc + curr * b[i], 0);
}
