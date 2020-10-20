/**
 *
 * @param {number} base
 * @param {number} exp
 * @return {number}
 */
function power(base, exp) {
  if (base === 0) return 0;
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

describe('power test', () => {
  it('test', () => {
    expect(power(2, 0)).toEqual(1);
    expect(power(2, 2)).toEqual(4);
    expect(power(2, 4)).toEqual(16);
    expect(power(5, 2)).toEqual(25);
    expect(power(53, 0)).toEqual(1);
    expect(power(0, 99)).toEqual(0);
  });
});
