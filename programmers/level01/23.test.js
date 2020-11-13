// 약수의 합

function solution(n) {
  //     if (n === 1) return 1;
  //     let answer = 0;
  //     let divisor = 1;
  //     let multiple = n;
  //     let isDivided = false;

  //     while (divisor < multiple) {
  //         isDivided = n % divisor === 0 ? true : false;
  //         if (isDivided) {
  //             multiple = n / divisor;
  //             answer += multiple === divisor ? divisor : multiple + divisor;
  //         }
  //         divisor++;
  //     }

  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer += i;
  }

  return answer;
}
