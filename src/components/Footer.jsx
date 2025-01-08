export default function Footer({ moves, timer, formatTime }){
  return(
    <div className="footer">
      <div className="timer">
        <p>Time</p>
        <p id="timeCounterTxt">{formatTime(timer)}</p>
      </div>
      <div className="moves">
        <p>Moves</p>
        <p id="movesCounterTxt">{moves}</p>
      </div>
    </div>
  )
}