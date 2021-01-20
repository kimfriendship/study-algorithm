// 최대공약수와 최소공배수

function solution(n, m) {
  let divisor = 1;
  let gcd = 1;
  let lcm = 1;

  while (divisor < n && divisor < m) {
    divisor++;
    if (!(n % divisor) && !(m % divisor)) {
      n = n / divisor;
      m = m / divisor;
      gcd *= divisor;
      divisor = 1;
    }
  }

  lcm = gcd * n * m;

  return [gcd, lcm];
}
