function solution1(n, arr1, arr2) {
  const convertArray = (array) =>
    array.map((num) => {
      let subArray = num.toString(2).split("");
      if (subArray.length < n) {
        for (let i = 0; subArray.length < n; i++) subArray.unshift("0");
      }
      return subArray;
    });

  const A = convertArray(arr1);
  const B = convertArray(arr2);
  let answer = [];

  for (let i = 0; i < n; i++) {
    let decoded = [];

    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] === "0" && B[i][j] === "0") decoded.push(" ");
      else decoded.push("#");
    }

    answer.push(decoded.join(""));
  }

  return answer;
}

function solution2(n, arr1, arr2) {
  const answer = arr1.map((value, i) =>
    (value | arr2[i]) // vertical bar usage
      .toString(2)
      .padStart(n, "0") // padStart or repeat
      .replace(/0/g, " ")
      .replace(/1/g, "#")
  );

  return answer;
}
