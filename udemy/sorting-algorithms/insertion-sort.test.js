/**
 *
 * @param {array} arr
 * @return {array}
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let val = arr[i];
    let j = i - 1;

    for (j; j >= 0; j--) {
      if (arr[j] > val) arr[j + 1] = arr[j];
      else break;
    }

    arr[j + 1] = val;
  }

  return arr;
}

describe('insertion sort test', () => {
  it('test', () => {
    expect(insertionSort([8, 4, 55, 35, 54])).toEqual([4, 8, 35, 54, 55]);
    expect(insertionSort([6, 5, 5, 4, 97, 0])).toEqual([0, 4, 5, 5, 6, 97]);
    expect(insertionSort([8, 6, -4, 3, 2, 99])).toEqual([-4, 2, 3, 6, 8, 99]);
  });
});
