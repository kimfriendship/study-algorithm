/**
 *
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
function isSubsequence(str1, str2) {
  if (str1.length > str2.length) return false;
  if (str2.indexOf(str1[0]) < 0) return false;

  let i = 1;
  let j = str2.indexOf(str1[0]) + 1;

  while (j <= str2.length) {
    if (i >= str1.length) return true;
    if (str1[i] !== str2[j]) ++j;
    ++i;
    ++j;
  }

  return false;
}

describe('isSubsequence test', () => {
  it('truthy test', () => {
    expect(isSubsequence('world', 'hello world')).toBeTruthy();
    expect(isSubsequence('sing', 'string')).toBeTruthy();
    expect(isSubsequence('abc', 'abracadabra')).toBeTruthy();
    expect(isSubsequence('ae', 'pineapple')).toBeTruthy();
  });
  it('falsy test', () => {
    expect(isSubsequence('abc', 'acb')).toBeFalsy();
    expect(isSubsequence('x', 'asdfjkl')).toBeFalsy();
  });
});
