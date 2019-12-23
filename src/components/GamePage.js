import React,{useState , useEffect} from 'react';
import './GamePage.css';
import {Link} from 'react-router-dom';
import Computer from './computer.svg';
import Person from './person.svg';


export default function GamePage(props) {

const[player , setPlayer] = useState([]);
const[computerCards , setComputerCards] = useState([]);
const[playerCards , setPlayerCards] = useState([]);
const[index, setIndex] = useState(0);
const[ComputerConter,setComputerConter] = useState(0);
const[playerconter,setPlayerConter] = useState(0);
const[winner , setWinner] = useState('win');

useEffect(() => {
    setPlayer(props.player);
    setPlayerCards(props.playerCard);
    setComputerCards(props.computerCard);
})

const endGame = ()=>{
    if (index<25){
        return(
        <div>
        <button 
        onClick={()=>{
        // check which card is higher and rase counter
        if(computerCards[index] > playerCards[index]){
            setComputerConter(ComputerConter+1);
        }
        else if(computerCards[index] < playerCards[index]){
            setPlayerConter(playerconter+1);
        }
        if(ComputerConter >= playerconter){setWinner('lose')}
        else{setWinner('win')}
        // rase index in 1 to show the next cards
        setIndex(index+1)   
        }}
        >next</button></div>)}
    // if the game ends
    else{
        return(
            <Link to = '/end_game'>
            <button 
            onClick={()=>{
            player.games++
            // send winner and player to app
            props.winner(winner); props.newPlayer(player)}}>
            end</button>
            </Link>
        )
    }
}


    return (
        <div>
            <div id="helloUser">hello {player.name}!
            <Link to = '/' id="logOut">  Another user?</Link>
            </div>
            <div className="points">
                <p id="pointsHeader">The Points</p>
                <p>computer: {ComputerConter} you: {playerconter} </p>
            </div>
            <p>computer 
                <img src={Computer} alt="computer" className="icon" />
            </p>
            <div id="cards">
                <div className='card'>{computerCards[index]} </div>
                <div className='card'> {playerCards[index]} </div>
            </div>
            <p>you
                <img src={Person} alt="person" className="icon"/>
            </p> <br/>
            {endGame()}
        </div>
    )
}
