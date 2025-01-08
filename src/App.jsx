import { useEffect, useState } from 'react';
import './App.css'
import Boxes from './components/Boxes.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Modal from './components/Modal.jsx';

function App() {
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [shuffledArray, setShuffledArray] = useState([]);
  const [matchedBoxes, setMatchedBoxes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const startTimer = () => {
    if (intervalId) return;
    const id = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    setIntervalId(id);
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  useEffect(() => {
    stopTimer();

    if (!isModalOpen && !isHamburgerMenuOpen) {
      startTimer();
    }
  
    return () => {
      stopTimer();
    };
  }, [isModalOpen, isHamburgerMenuOpen]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (score === 8) {
      setIsModalOpen(true);
      stopTimer();
    }
  }, [score]);

  const icons = [
    { id: 1, icon: <i className="fa-regular fa-futbol"></i>, shape: 'futbol' },
    { id: 2, icon: <i className="fa-solid fa-anchor"></i>, shape: 'anchor' },
    { id: 3, icon: <i className="fa-solid fa-flask"></i>, shape: 'flask' },
    { id: 4, icon: <i className="fa-solid fa-sun"></i>, shape: 'sun' },
    { id: 5, icon: <i className="fa-solid fa-bug"></i>, shape: 'bug' },
    { id: 6, icon: <i className="fa-regular fa-moon"></i>, shape: 'moon' },
    { id: 7, icon: <i className="fa-solid fa-snowflake"></i>, shape: 'snowflake' },
    { id: 8, icon: <i className="fa-regular fa-star"></i>, shape: 'star' },
    { id: 9, icon: <i className="fa-regular fa-futbol"></i>, shape: 'futbol' },
    { id: 10, icon: <i className="fa-solid fa-anchor"></i>, shape: 'anchor' },
    { id: 11, icon: <i className="fa-solid fa-flask"></i>, shape: 'flask' },
    { id: 12, icon: <i className="fa-solid fa-sun"></i>, shape: 'sun' },
    { id: 13, icon: <i className="fa-solid fa-bug"></i>, shape: 'bug' },
    { id: 14, icon: <i className="fa-regular fa-moon"></i>, shape: 'moon' },
    { id: 15, icon: <i className="fa-solid fa-snowflake"></i>, shape: 'snowflake' },
    { id: 16, icon: <i className="fa-regular fa-star"></i>, shape: 'star' },
  ];

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  useEffect(() => {
    setShuffledArray(shuffleArray([...icons]));
  }, []);

  function newGame(prop){
    if(prop === 'resume'){
      setIsHamburgerMenuOpen(false);
      return;
    }
    if(prop === 'new'){
      setShuffledArray(shuffleArray([...icons]));
    }
    setScore(0);
    setTimer(0);
    setMoves(0);
    setIsModalOpen(false);
    setIsHamburgerMenuOpen(false);
    setMatchedBoxes([]);
  }

  return (
    <div className='container'>
      <Header newGame={newGame} isHamburgerMenuOpen={isHamburgerMenuOpen} setIsHamburgerMenuOpen={setIsHamburgerMenuOpen} />
      <Boxes score={score} setScore={setScore} moves={moves} setMoves={setMoves} shuffledArray={shuffledArray} matchedBoxes={matchedBoxes} setMatchedBoxes={setMatchedBoxes} />
      <Footer moves={moves} timer={timer} setTimer={setTimer} formatTime={formatTime} />
      {isModalOpen ? <Modal timer={timer} moves={moves} newGame={newGame} /> : ''}
    </div>
  )
}

export default App
