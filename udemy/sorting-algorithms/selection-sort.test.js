/**
 *
 * @param {array} arr
 * @return {array}
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }

    if (i !== min) {
      // let temp = arr[min];
      // arr[min] = arr[i];
      // arr[i] = temp;
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }

  return arr;
}

describe('selection sort test', () => {
  it('test', () => {
    expect(selectionSort([8, 4, 55, 35, 54])).toEqual([4, 8, 35, 54, 55]);
    expect(selectionSort([6, 5, 5, 4, 97, 0])).toEqual([0, 4, 5, 5, 6, 97]);
    expect(selectionSort([8, 6, -4, 3, 2, 99])).toEqual([-4, 2, 3, 6, 8, 99]);
  });
});
