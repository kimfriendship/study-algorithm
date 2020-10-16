/**
 *
 * @param {string} str
 * @return {number}
 */
function findLongestSubstring(str) {
  if (str.length < 1) return 0;
  let currentLength = 1;
  let maxLength = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str.indexOf(str[i], i - currentLength) === i) {
      ++currentLength;
    } else {
      maxLength = Math.max(maxLength, currentLength);
      currentLength = i - str.indexOf(str[i], i - currentLength);
    }
  }

  return maxLength;
}

describe('find longest substring test', () => {
  it('test', () => {
    expect(findLongestSubstring('')).toBe(0);
    expect(findLongestSubstring('bbabc')).toBe(3);
    expect(findLongestSubstring('rithmschool')).toBe(7);
    expect(findLongestSubstring('thecatinthehat')).toBe(7);
  });
});
