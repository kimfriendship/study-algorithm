const fs = require("fs");
const path = require("path");

const pathDir = __dirname;

function readTestFile(fileName) {
  return fs.readFileSync(fileName).toString();
}

function runTest(fileName) {
  const n = readTestFile(fileName);
  if (n > 100000000) return;
  const number = new String(n);
  let answer = 0;

  for (let i = 0; i < number.length; i++) {
    answer += +number[i];
  }

  console.log(answer);
}

fs.readdir(pathDir, (err, files) => {
  files.forEach((file) => {
    if (file.split(".")[1] !== "txt") {
      return;
    }

    console.log(`Testing ${file}...`);
    console.log("====================================");
    console.log("Test Ouput:");

    const tStart = new Date().getTime();
    runTest(path.join(pathDir, file));
    const tDiff = new Date().getTime() - tStart;

    console.log(`${tDiff}ms ellapsed.`);
    console.log("====================================\n");
  });
});
