/**
 *
 * @param {num} num
 * @param {array} array
 * @return {number}
 */
function fib(num, array = [1, 1]) {
  if (array[num - 1] > 0) return array[num - 1];
  array = [...array, array[array.length - 2] + array[array.length - 1]];
  return fib(num, array);
}

// better solution
// function fib(num){
//   if (num <= 2) return 1;
//   return fib(num - 2) + fib(num - 1);
// }

describe('fib test', () => {
  it('test', () => {
    expect(fib(4)).toEqual(3);
    expect(fib(10)).toEqual(55);
    expect(fib(28)).toEqual(317811);
    expect(fib(35)).toEqual(9227465);
  });
});
