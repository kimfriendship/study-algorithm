/**
 *
 * @param {number} num
 * @return {number}
 */
function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

describe('recursive range test', () => {
  it('test', () => {
    expect(recursiveRange(6)).toEqual(21);
    expect(recursiveRange(10)).toEqual(55);
  });
});
