// 이상한 문자 만들기

function solution(s) {
  const arr = s.split("");
  let isEven = true;

  for (let i = 0; i < arr.length; i++) {
    arr[i] = isEven ? arr[i].toUpperCase() : arr[i].toLowerCase();
    isEven = s[i] === " " ? true : !isEven;
  }

  return arr.join("");
}
