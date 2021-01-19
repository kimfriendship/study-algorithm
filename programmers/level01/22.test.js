// 시저 암호

function solution(s, n) {
  const strs = s.split("");
  const chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let isLowerCase = true;

  for (let i = 0; i < s.length; i++) {
    if (strs[i] === " ") continue;
    const char = strs[i].toLowerCase();
    const idx = chars.indexOf(char) + n;
    const newChar = chars[idx > 25 ? idx - 26 : idx];
    isLowerCase = strs[i] === char ? true : false;
    strs[i] = isLowerCase ? newChar : newChar.toUpperCase();
  }

  return strs.join("");
}
