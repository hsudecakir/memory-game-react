export default function Header({ newGame, isHamburgerMenuOpen, setIsHamburgerMenuOpen, stopTimer }){

  function handleClick(){
    setIsHamburgerMenuOpen(true);
  }

  return(
    <>
      <div className="header">
        <h1>memory</h1>
        <div className="header-buttons">
          <button onClick={() => newGame('restart')} id="restartBtn">Restart</button>
          <button onClick={() => newGame('new')} id="newGameBtn">New Game</button>
        </div>
        <button onClick={handleClick} id="menuBtn">Menu</button>
        {isHamburgerMenuOpen ? <HamburgerMenu newGame={newGame} /> : ''}
      </div>
    </>
  )
}

function HamburgerMenu({ newGame }){
  return(
    <div className="hamburger-menu-container">
      <div id="hamburgerMenu">
        <div className="hamburger-menu-buttons">
            <button onClick={() => newGame('restart')}  id="hamburgerMenuRestartBtn">Restart</button>
            <button onClick={() => newGame('new')}  id="hamburgerMenuNewGameBtn">New Game</button>
            <button onClick={() => newGame('resume')}  id="hamburgerMenuResumeBtn">Resume Game</button>
        </div>
      </div>
    </div>
  )
}