import { useEffect, useState } from "react";

export default function Boxes({ moves, setMoves, score, setScore, shuffledArray, matchedBoxes, setMatchedBoxes }){
  const [clickedBoxes, setClickedBoxes] = useState([]);

  useEffect(() => {
    if (clickedBoxes.length === 2) {
      if (clickedBoxes[0].shape === clickedBoxes[1].shape) {
        setMatchedBoxes([...matchedBoxes, ...clickedBoxes]);
        setScore(score + 1);
      }
      setTimeout(() => {
        setClickedBoxes([]);
      }, 1000);
    }
  }, [clickedBoxes]);

  function handleClick(e, box){
    e.stopPropagation();
    if (!clickedBoxes.includes(box) && clickedBoxes.length < 2) {
      setClickedBoxes([...clickedBoxes, box]);
      setMoves(moves + 1);
    }
  }


  return(
    <div className="boxes">
      {shuffledArray.map((x) => (<div key={x.id} onClick={(e) => handleClick(e, x)} className={`box ${clickedBoxes.includes(x) ? 'active' : matchedBoxes.includes(x) ? 'matched' : ''}`}>{x.icon}</div>))}
    </div>
  )
}