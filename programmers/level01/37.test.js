// x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
  let answer = [x];

  for (let i = 2; i <= n; i++) {
    answer.push(x * i);
  }

  return answer;
}
