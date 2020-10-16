/**
 *
 * @param {array} arr
 * @param {number} avg
 * @return {boolean}
 */
function averagePair(arr, avg) {
  if (!arr || arr.length < 2) return false;

  const lastIndex = arr.length - 1;
  const sum = avg * 2;
  let i = 0;
  let j = 1;

  while (i < lastIndex) {
    if (arr[j] === sum - arr[i]) return true;
    if (arr[j] < sum - arr[i] && j < lastIndex) ++j;
    if (arr[j] > sum - arr[i] || j >= lastIndex) {
      ++i;
      j = i + 1;
    }
  }

  return false;
}

describe('averagePair test', () => {
  it('truthy test', () => {
    expect(averagePair([1, 2, 3, 5], 2.5)).toBeTruthy();
    expect(averagePair([1, 2, 3], 2.5)).toBeTruthy();
    expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 9)).toBeTruthy();
  });
  it('falsy test', () => {
    expect(averagePair([], 4)).toBeFalsy();
    expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBeFalsy();
    expect(averagePair([1, 2, 3], 100)).toBeFalsy();
    expect(averagePair(undefined, 100)).toBeFalsy();
  });
});
