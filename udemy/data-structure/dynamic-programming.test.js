function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 2) + fib(n - 1);
}

function memoFib(n, memo = [0, 1, 1]) {
  if (memo[n]) return memo[n];
  const result = memoFib(n - 2, memo) + memoFib(n - 1, memo);
  memo[n] = result;
  return result;
}
