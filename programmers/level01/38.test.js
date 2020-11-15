// 직사각형 별찍기

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  const row = "*".repeat(a) + "\n";
  let answer = row;

  for (let i = 1; i < b; i++) answer += row;

  console.log(answer);
});
