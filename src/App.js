import logo from "./logo.svg";
import "./App.css";
import { Board } from "./game/Board";
import { Piece } from "./game/Piece";
import { useState } from "react";

function App() {
  const [board, setBoard] = useState(new Board(3))

  return (
    <div className="App">
      {board.board.map((row) => (
        <div>
          {row.map((square) => (
            <SquareComponent square={square} board={board} setBoard={setBoard} />
          ))}
        </div>
      ))}
    </div>
  );
}

function SquareComponent({ square, board, setBoard }) {
  let piece = square.piece
  return (
    <>
      <span
      onClick={(e)=> {
    console.log(e)
        console.log(['clicked',{square}])
        square.placePiece(Piece.Blue)
        setBoard(board)
      }}
        className={`square ${
          piece == Piece.Blue ? "blue" : piece == Piece.Red ? "red" : "empty"
        }`}
      ></span>
    </>
  );
}

export default App;
