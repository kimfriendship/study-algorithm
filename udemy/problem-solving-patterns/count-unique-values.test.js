/**
 *
 * @param {array} array
 * @return {number}
 */
function countUniqueValues(array) {
  if (array.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < array.length; j++) {
    if (array[i] === array[j]) continue;
    array[++i] = array[j];
  }

  return ++i;
}

describe("count unique values test", () => {
  it("test", () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toEqual(2);
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toEqual(7);
    expect(countUniqueValues([])).toEqual(0);
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toEqual(4);
  });
});
