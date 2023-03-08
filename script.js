const createPlayer = (name, marker) => {
  return { name, marker}
};
const game = (() => {
  const p1 = createPlayer("Player 1", "X");
  const p2 = createPlayer("Player 2", "O");
  const gameState = document.querySelector(".game-state");
  const  cell = document.querySelectorAll(".cell");
  let board = Array(9).fill(null);
  let currentPlayer = p1;
  let hasEnded = false;
  let turn = 0;

  function swapPlayer() {
    if(hasEnded) {
      return;
    }
    currentPlayer = currentPlayer === p1 ? p2 : p1;
    gameState.textContent = "It's " + currentPlayer.name + "'s turn";
    turn++;
  }

  function findWin() {
    let wincon = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i = 0; i < wincon.length; i++) {
      if(board[wincon[i][0]] === board[wincon[i][1]] && board[wincon[i][1]] === board[wincon[i][2]] && board[wincon[i][0]] !== null) {
        hasEnded = true;
        gameState.textContent = board[wincon[i][0]].name + " won!";
        return;
      }
    }
    if(turn === 9) {
      hasEnded = true;
      gameState.textContent = "Nobody wins. It's a tie.";
    }
  }
  
  function resetGame() {
    board = Array(9).fill(null);
    for(values in cell) {
      cell[values].textContent = "";
    }
    currentPlayer = p1;
    hasEnded = false;
    turn = 0;
    gameState.textContent = "It's " + currentPlayer.name + "'s turn";
  }

  document.addEventListener("click", e => {
    if(e.target.className === "cell" && !hasEnded) {
      let boardIndex = e.target.id
      boardIndex = parseInt(e.target.id.slice(2));
      console.log(boardIndex)
      if(board[boardIndex] === null) {
        board[boardIndex] = currentPlayer;
        e.target.textContent = currentPlayer.marker;
        swapPlayer();
        findWin();
      }
    } else if(e.target.className === "reset" || e.target.parentNode.className === "reset") {
      resetGame();
    }
  });

})();