// 하샤드 수

function solution(x) {
  const sum = String(x)
    .split("")
    .reduce((a, b) => +a + +b, 0);
  const isHarshad = x % sum === 0;
  return isHarshad;
}
