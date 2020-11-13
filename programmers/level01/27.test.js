// 정수 내림차순으로 배치하기

function solution(n) {
  //     let arr = String(n).split('').sort((a, b) => b - a);
  //     const length = arr.length;
  //     let answer = '';

  //     for (let i = 0; i < length; i++) {
  //         answer += arr.shift();
  //     }

  const answer = String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return +answer;
}
