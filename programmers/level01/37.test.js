// 행렬의 덧셈

function solution(arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    const innerArr = [];
    for (let j = 0; j < arr1[0].length; j++) {
      innerArr.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(innerArr);
  }

  return answer;
}
