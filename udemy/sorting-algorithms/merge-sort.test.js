/**
 *
 * @param {array} arr1
 * @param {array} arr2
 * @return {array}
 */
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    let val = arr1[i] < arr2[j] ? arr1[i] : arr2[j];
    results.push(val);
    val === arr1[i] ? ++i : ++j;
  }

  let leftArray = i === arr1.length ? arr2 : arr1;
  let startIndex = leftArray === arr1 ? i : j;
  results = results.concat(leftArray.slice(startIndex));

  return results;
}

/**
 *
 * @param {array} arr
 * @return {array}
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const arr1 = mergeSort(arr.slice(0, middle));
  const arr2 = mergeSort(arr.slice(middle));

  return merge(arr1, arr2);
}

describe('merge sort test', () => {
  it('test', () => {
    expect(mergeSort([8, 4, 55, 35, 54])).toEqual([4, 8, 35, 54, 55]);
    expect(mergeSort([6, 5, 5, 4, 97, 0])).toEqual([0, 4, 5, 5, 6, 97]);
    expect(mergeSort([8, 6, -4, 3, 2, 99])).toEqual([-4, 2, 3, 6, 8, 99]);
  });
});
