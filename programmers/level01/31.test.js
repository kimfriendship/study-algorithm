function solution(numbers, hand) {
  hand = hand === "left" ? "L" : "R";
  const leftArr = [1, 4, 7];
  const midArr = [2, 5, 8, 0];
  const rightArr = [3, 6, 9];
  let L = { idx: 3, isMid: false };
  let R = { idx: 3, isMid: false };
  let answer = "";

  const getDiff = (midIdx, direction) => {
    const { idx, isMid } = direction;
    let diff;

    if (midIdx === idx && isMid) diff = 0;
    if (midIdx === idx && !isMid) diff = 1;
    if (midIdx !== idx && isMid) diff = Math.abs(midIdx - idx);
    if (midIdx !== idx && !isMid) diff = Math.abs(midIdx - idx) + 1;

    return diff;
  };

  for (const num of numbers) {
    const leftIdx = leftArr.indexOf(num);
    if (leftIdx >= 0) {
      L = { idx: leftIdx, isMid: false };
      answer += "L";
    }

    const rightIdx = rightArr.indexOf(num);
    if (rightIdx >= 0) {
      R = { idx: rightIdx, isMid: false };
      answer += "R";
    }

    const midIdx = midArr.indexOf(num);
    if (midIdx >= 0) {
      const leftDiff = getDiff(midIdx, L);
      const rightDiff = getDiff(midIdx, R);
      const direction =
        leftDiff > rightDiff ? "R" : leftDiff === rightDiff ? hand : "L";

      answer += direction;
      if (direction === "L") L = { idx: midIdx, isMid: true };
      else R = { idx: midIdx, isMid: true };
    }
  }

  return answer;
}
