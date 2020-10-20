/**
 *
 * @param {array} array
 * @return {number}
 */
function productOfArray(array) {
  if (array.length === 0) return 1;
  return array[0] * productOfArray(array.slice(1));
}

describe('product of array test', () => {
  it('test', () => {
    expect(productOfArray([1, 2, 3])).toEqual(6);
    expect(productOfArray([1, 2, 3, 10])).toEqual(60);
    expect(productOfArray([3, 1, 5, 3, 3, 2])).toEqual(270);
  });
});
