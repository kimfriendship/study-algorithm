// 문자열 다루기 기본

function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  if (s.includes("e")) return false;
  const isNum = !isNaN(+s);

  return isNum;
}
