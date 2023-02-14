const game = (() => {
  let board = Array(9).fill(null);
  let turn = "X";
  let winner = null;


  const getBoard = () => {
    return board;
  }
  const getTurn = () => {
    return turn;
  }  
  const getWinner = () => {
    return winner;
  }
  return { getBoard, getTurn, getWinner };
})();

const createPlayer = (name, marker) => {
  return { name, marker };
};

function clickHandler() {
  document.addEventListener("click", e => {
    if(e.target.className === "cell") {
      console.log(e.target.id);
    }
  });
}
clickHandler();