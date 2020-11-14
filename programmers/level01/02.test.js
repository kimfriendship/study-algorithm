// 크레인 인형뽑기 게임

function solution(board, moves) {
  let stack = [];
  let count = 0;

  for (let i = 0; i < moves.length; i++) {
    const pos = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][pos]) {
        if (stack[stack.length - 1] === board[j][pos]) {
          stack.pop();
          count += 2;
        } else {
          stack.push(board[j][pos]);
        }
        board[j][pos] = 0;
        break;
      }
    }
  }

  // for (let i = 0; i < stack.length; i++) {
  //     if (stack[i] === stack[i + 1]) {
  //         stack.splice(i, 2);
  //         i = -1;
  //         count += 2;
  //     }
  // }

  return count;
}
