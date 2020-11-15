// 핸드폰 번호 가리기

function solution(phone_number) {
  const length = phone_number.length;
  const answer = "*".repeat(length - 4) + phone_number.slice(-4);

  return answer;
}
