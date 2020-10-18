/**
 *
 * @param {number} num1
 * @param {number} num2
 * @return {boolean}
 */
function sameFrequency(num1, num2) {
  const str1 = String(num1);
  const str2 = String(num2);
  const obj = {};

  if (str1.length !== str2.length) return false;

  for (let char of str1) {
    obj[char] = obj[char] ? ++obj[char] : 1;
  }

  for (let char of str2) {
    if (!obj[char] || obj[char] <= 0) return false;
    else --obj[char];
  }

  return true;
}

describe('valid anagram test', () => {
  it('truthy test', () => {
    expect(sameFrequency(12, 21)).toBeTruthy();
    expect(sameFrequency(182, 281)).toBeTruthy();
    expect(sameFrequency(3589578, 5879385)).toBeTruthy();
  });
  it('falsy test', () => {
    expect(sameFrequency(34, 14)).toBeFalsy();
    expect(sameFrequency(22, 222)).toBeFalsy();
  });
});
