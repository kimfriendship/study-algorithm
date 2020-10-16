// use frequency counter pattern

/**
 *
 * @param  {...any} args
 * @return {boolean}
 */
function areThereDuplicates1(...args) {
  const obj = {};

  for (let value of args) {
    if (obj[value]) return true;
    else obj[value] = 1;
  }

  return false;
}

// use multiple pointers pattern

/**
 *
 * @param  {...any} args
 * @return {boolean}
 */
function areThereDuplicates2(...args) {
  for (let i = 0; i < args.length; i++) {
    if (args.indexOf(args[i]) !== i) return true;
  }

  return false;
}

describe('areThereDuplicates1 test', () => {
  it('truthy test', () => {
    expect(areThereDuplicates1(1, 2, 2)).toBeTruthy();
    expect(areThereDuplicates1('a', 'b', 'c', 'a')).toBeTruthy();
  });
  it('falsy test', () => {
    expect(areThereDuplicates1(1, 2, 3)).toBeFalsy();
  });
});

describe('areThereDuplicates2 test', () => {
  it('truthy test', () => {
    expect(areThereDuplicates2(1, 2, 2)).toBeTruthy();
    expect(areThereDuplicates2('a', 'b', 'c', 'a')).toBeTruthy();
  });
  it('falsy test', () => {
    expect(areThereDuplicates2(1, 2, 3)).toBeFalsy();
  });
});
