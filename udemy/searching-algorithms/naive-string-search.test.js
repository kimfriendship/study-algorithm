/**
 *
 * @param {string} long
 * @param {string} short
 * @return {number}
 */
function stringSearch(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i]) break;
      if (j === short.length - 1) ++count;
      else ++i;
    }
  }

  return count;
}

describe('linear search test', () => {
  it('test', () => {
    expect(stringSearch('ldlolfd', 'l')).toBe(3);
    expect(stringSearch('ariana grande', 'an')).toBe(2);
    expect(stringSearch('lolli lolli lollipop', 'la')).toBe(0);
  });
});
