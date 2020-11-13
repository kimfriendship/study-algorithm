// 정수 제곱근 판별

function solution(n) {
  //     const sqrt = Math.sqrt(n);
  //     const isSquared = Number.isInteger(sqrt);
  //     return isSquared ? (sqrt + 1) ** 2 : -1;

  let sqrt = 1;
  let isSqrt = false;

  while (sqrt ** 2 <= n) {
    if (sqrt ** 2 === n) {
      isSqrt = true;
      break;
    }
    sqrt++;
  }

  return isSqrt ? (sqrt + 1) ** 2 : -1;
}
