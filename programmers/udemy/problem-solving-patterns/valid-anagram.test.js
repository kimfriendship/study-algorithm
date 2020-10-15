/**
 *
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];

    obj1[char1] = obj1[char1] ? ++obj1[char1] : 1;
    obj2[char2] = obj2[char2] ? ++obj2[char2] : 1;
  }

  for (let char in obj1) {
    if (obj1[char] !== obj2[char]) return false;
  }

  return true;
}

describe("valid anagram test", () => {
  it("truthy test", () => {
    expect(validAnagram("", "")).toBeTruthy();
    expect(validAnagram("aaz", "zaa")).toBeTruthy();
    expect(validAnagram("anagram", "nagaram")).toBeTruthy();
    expect(validAnagram("qwerty", "qeywrt")).toBeTruthy();
  });
  it("falsy test", () => {
    expect(validAnagram("rat", "car")).toBeFalsy();
    expect(validAnagram("awesome", "awesom")).toBeFalsy();
  });
});
