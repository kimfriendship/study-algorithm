// 체육복
function solution(n, lost, reserve) {
  let count = n - lost.length;
  lost.sort((a, b) => a - b);

  for (let i = 0; i < reserve.length; i++) {
    const numIdx = lost.indexOf(reserve[i]);
    if (numIdx >= 0) {
      lost[numIdx] = -1;
      reserve[i] = -1;
      count++;
    }
  }

  lost.filter((num) => num !== -1);

  for (const num of lost) {
    const prevIdx = reserve.indexOf(num - 1);
    if (prevIdx >= 0) {
      reserve.splice(prevIdx, 1);
      count++;
      continue;
    }
    const nextIdx = reserve.indexOf(num + 1);
    if (nextIdx >= 0) {
      reserve.splice(nextIdx, 1);
      count++;
    }
  }

  return count;
}
