// 가운데 글자 가져오기

// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
  const midIdx = s.length / 2;
  const middle =
    s.length % 2 ? s[Math.floor(midIdx)] : s[midIdx - 1] + s[midIdx];

  return middle;
}
