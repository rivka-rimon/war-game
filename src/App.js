import React,{useState , useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Register from './components/Register';
import GamePage from './components/GamePage';
import End from './components/End';
import Cards from './components/cards.png';



function App() {

  const[cards,setCards] = useState([]);
  const[playerCards , setPlayerCards] = useState([]);
  const[computerCards , setComputerCards] = useState([]);
  const[player , setPlayer] = useState({});
  const[winner,setWinner] = useState('');
  const[color,setColor] = useState('');
  

  // create the cards
  const randomCards = () =>{
  let createCardsArr = [];
  // create 4 cards of each number
  for (let num = 1; num < 14; num++) {
    for (let counter = 0; counter < 4; counter++) {
      createCardsArr.push(num);  
    }}
  // shuffle the cards
  let shuffle = [];
  while (shuffle.length < 52) {
  let n = Math.floor(Math.random()* (createCardsArr.length) - 0) + 0;
  shuffle.push(createCardsArr[n]);
  createCardsArr.splice(n , 1);  
  }
  return shuffle;
}





  return (
    <div className="App">
        <h1>
          <img src={Cards} alt="cards" width="100px" height="100px" /> 
           war game
        </h1>
        <Router>
        <Switch>
        <Route exact path = '/' component = {() => {return <Register cards={randomCards()}
        // set the cards
        myCards={(c)=>{setCards(c); setPlayerCards(c.slice(0,26)); setComputerCards(c.slice(26))}}
        //create player object 
        name={(n)=>{setPlayer({name: n , games:0, lost:0 , win:0 , cards:playerCards })}} /> } } />
        <Route exact path = '/game' component={() => {return <GamePage 
        computerCard={computerCards} playerCard={playerCards} player={player} 
        newPlayer={(p)=>{setPlayer(p)}}
        winner={(w)=>{if(w == 'lose'){player.lost++; setColor('red')}else{player.win++; setColor('blue')}
         setPlayer(player.games++); setWinner(w); setCards(randomCards())  }}
         /> } } />
        <Route exact path = '/end_game' component = {() => {return <End lost={player.lost} win={player.win} winner={winner}
        again={()=>{setPlayerCards(cards.slice(0,26)); setComputerCards(cards.slice(26)) }}
        changeColor={color}
        /> } } />
        </Switch>
      </Router>
      <div id="credit">Icons made by <a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;

