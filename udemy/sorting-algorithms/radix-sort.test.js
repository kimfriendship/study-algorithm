/**
 *
 * @param {number} num
 * @param {number} i
 * @return {number}
 */
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / 10 ** i) % 10;
}

/**
 *
 * @param {number} num
 * @return {nmber}
 */
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 *
 * @param {array} arr
 * @return {number}
 */
function mostDigits(arr) {
  let count = 0;
  arr.forEach((num) => (count = Math.max(count, digitCount(num))));
  return count;
}

/**
 *
 * @param {array} arr
 * @return {array}
 */
function radixSort(arr) {
  const loops = mostDigits(arr);

  for (let k = 0; k <= loops; k++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k);
      buckets[digit].push(arr[i]);
    }

    arr = buckets.flat();
  }

  return arr;
}

describe('radix sort test', () => {
  it('test', () => {
    expect(radixSort([8432, 9, 456, 35, 54])).toEqual([9, 35, 54, 456, 8432]);
    expect(radixSort([65, 43, 4909, 9657, 0])).toEqual([0, 43, 65, 4909, 9657]);
    expect(radixSort([92, 896, 4, 272, 9749])).toEqual([4, 92, 272, 896, 9749]);
  });
});
