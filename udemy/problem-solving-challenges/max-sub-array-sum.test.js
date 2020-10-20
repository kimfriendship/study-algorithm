/**
 *
 * @param {array} arr
 * @param {number} num
 * @return {number}
 */
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;
  let max = 0;
  let sum = 0;

  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }

  for (let j = 1; j <= arr.length - num; j++) {
    sum = sum - arr[j - 1] + arr[j + num - 1];
    max = max > sum ? max : sum;
  }

  return max;
}

describe('maxSubarraySum test', () => {
  it('test', () => {
    expect(maxSubarraySum([100, 200, 300, 400], 2)).toEqual(700);
    expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toEqual(39);
    expect(maxSubarraySum([-3, 4, 0 - 2, 6, -1], 2)).toEqual(5);
    expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toEqual(5);
    expect(maxSubarraySum([2, 3], 3)).toEqual(null);
  });
});
