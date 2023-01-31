let board = Array(9).fill("");

document.querySelectorAll(".box").forEach(function (box) {
  box.addEventListener("click", function (event) {
    let index = box.getAttribute("data-index");
    if (board[index] === "") {
      board[index] = "O";
      box.textContent = "O";
      let result = checkWin(board);
      if (result === 10) {
        document.querySelector("#player").textContent = "You win!";
      } else if (result === -10) {
        document.querySelector("#player").textContent = "AI wins!";
      } else if (result === 0) {
        document.querySelector("#player").textContent = "It's a draw!";
      } else {
        let bestMove = getBestMove(board);
        board[bestMove] = "X";
        document.querySelector("#box" + (bestMove + 1)).textContent = "X";
        let result = checkWin(board);
        if (result === 10) {
          document.querySelector("#player").textContent = "You win!";
        } else if (result === -10) {
          document.querySelector("#player").textContent = "AI wins!";
        } else if (result === 0) {
          document.querySelector("#player").textContent = "It's a draw!";
        }
      }
    }
  });
});


const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function minimax(board, depth, isMaximizing) {
  let result = checkWin(board);
  if (result !== null) {
    return result;
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        board[i] = "O";
        let score = minimax(board, depth + 1, false);
        board[i] = "";
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore - depth;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        board[i] = "X";
        let score = minimax(board, depth + 1, true);
        board[i] = "";
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore + depth;
  }
}

function getBestMove(board) {
  let bestScore = -Infinity;
  let bestMove = -1;
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      board[i] = "X";
      let score = minimax(board, 0, false);
      board[i] = "";
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }
  return bestMove;
}


function checkWin(board) {
  for (let i = 0; i < winningCombinations.length; i++) {
    let combination = winningCombinations[i];
    if (board[combination[0]] === board[combination[1]] &&
        board[combination[1]] === board[combination[2]]) {
      if (board[combination[0]] === "O") {
        return 10;
      } else if (board[combination[0]] === "X") {
        return -10;
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      return null;
    }
  }
  return 0;
}
document.querySelector('#reset').addEventListener('click', function (event) {
    location.reload();
});
