/**
 *
 * @param {array} arr
 * @param {number} num
 * @return {number}
 */
function minSubArrayLen(arr, num) {
  const getSum = (end) => arr.slice(0, end).reduce((acc, cur) => acc + cur, 0);
  let length = 1;
  let sum = getSum(length);
  let i = 1;

  while (length < arr.length) {
    if (sum >= num) return length;
    if (i > arr.length - length) {
      ++length;
      i = 1;
      sum = getSum(length);
    } else {
      sum = sum - arr[i - 1] + arr[i + length - 1];
      ++i;
    }
  }

  return 0;
}

describe('minSubArrayLen test', () => {
  it('test1', () => {
    expect(minSubArrayLen([1, 4, 16], 95));
    expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
    expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2);
    expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toBe(1);
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toBe(3);
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toBe(5);
  });
});
