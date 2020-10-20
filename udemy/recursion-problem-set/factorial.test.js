/**
 *
 * @param {number} num
 * @return {number}
 */
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

describe('factorial test', () => {
  it('test', () => {
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(4)).toEqual(24);
    expect(factorial(7)).toEqual(5040);
  });
});
