/**
 *
 * @param {array} arr
 * @param {number} start
 * @param {number} end
 * @return {array}
 */
function pivot(arr, start, end) {
  let pivot = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[start] < arr[i]) continue;
    ++pivot;
    [arr[pivot], arr[i]] = [arr[i], arr[pivot]];
  }

  [arr[pivot], arr[start]] = [arr[start], arr[pivot]];

  return pivot;
}

/**
 *
 * @param {array} arr
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivotIdx = pivot(arr, start, end);
    quickSort(arr, start, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, end);
  }

  return arr;
}

describe('quick sort test', () => {
  it('test', () => {
    expect(quickSort([8, 4, 55, 35, 54])).toEqual([4, 8, 35, 54, 55]);
    expect(quickSort([6, 5, 5, 4, 97, 0])).toEqual([0, 4, 5, 5, 6, 97]);
    expect(quickSort([8, 6, -4, 3, 2, 99])).toEqual([-4, 2, 3, 6, 8, 99]);
  });
});
