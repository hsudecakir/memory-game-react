export default function Modal({ timer, moves, newGame }){
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return(
    <div className="win-modal">
      <div className="dialog-container">
        <h2>You did it!</h2>
        <p>Game over! Here’s how you got on…</p>
        <div className="score-board">
          <p className="score-board-text">Time Elapsed</p>
          <p className="score-board-counter">{formatTime(timer)}</p>
        </div>
        <div className="score-board">
          <p className="score-board-text">Moves Taken</p>
          <p className="score-board-counter">{moves}</p>
        </div>
        <div className="dialog-buttons">
          <button onClick={() => newGame('restart')} id="dialogRestartBtn">Restart</button>
          <button onClick={() => newGame('new')} id="dialogNewGameBtn">Setup New Game</button>
        </div>
      </div>
    </div>
  )
}