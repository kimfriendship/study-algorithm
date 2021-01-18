// 같은 숫자는 싫어

function solution(arr) {
  const answer = arr.filter((num, i) => num !== arr[i - 1]);
  return answer;
}
