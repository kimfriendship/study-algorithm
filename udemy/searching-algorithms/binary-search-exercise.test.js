/**
 *
 * @param {array} arr
 * @param {number} val
 * @return {number}
 */
function binarySearch(arr, val) {
  let end = arr.length - 1;
  let start = 0;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== val && start !== end) {
    if (arr[mid] > val) end = mid - 1;
    if (arr[mid] < val) start = mid + 1;
    mid = Math.floor((start + end) / 2);
  }

  return arr[mid] === val ? mid : -1;
}

describe('binary search test', () => {
  it('test', () => {
    expect(binarySearch([10, 15, 20, 25, 30], 15)).toBe(1);
    expect(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)).toBe(4);
    expect(binarySearch([100], 100)).toBe(0);
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    expect(binarySearch([5, 6, 10, 13, 14, 34, 35, 37, 40, 84], 13)).toBe(3);
  });
});
