// 문자열 내 마음대로 정렬하기

// 문제 설명
// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
// 예를 들어 strings가 [sun, bed, car]이고 n이 1이면 각 단어의 인덱스 1의 문자 u, e, a로 strings를 정렬합니다.

function solution(strings, n) {
  let arr = [];
  let isOnly = true;

  for (let i = 0; i < strings.length; i++) {
    arr.push(strings[i][n]);
    isOnly = arr.indexOf(strings[i][n]) >= 0 && false;
  }

  arr.sort();
  if (!isOnly) strings.sort();

  for (let j = 0; j < strings.length; j++) {
    const idx = arr.indexOf(strings[j][n]);
    arr[idx] = strings[j];
  }

  return arr;
}
