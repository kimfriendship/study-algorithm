/**
 *
 * @param {array} arr
 * @return {array}
 */
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let swapped = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let remember = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = remember;
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return arr;
}

describe('bubble sort test', () => {
  it('test', () => {
    expect(bubbleSort([8, 4, 55, 35, 54])).toEqual([4, 8, 35, 54, 55]);
    expect(bubbleSort([6, 5, 5, 4, 97, 0])).toEqual([0, 4, 5, 5, 6, 97]);
    expect(bubbleSort([8, 6, -4, 3, 2, 99])).toEqual([-4, 2, 3, 6, 8, 99]);
  });
});
