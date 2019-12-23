import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function End(props) {

    const[color,setColor] = useState('red');

    useEffect (()=>{
        setColor(props.changeColor);
    })

    return (
        <div>
            <h2 style={{color:color}} >you {props.winner} !</h2>
            {props.lost} - {props.win} <br/> <br/>
            <div>
            <Link to = '/game' id="againBtn"><button onClick={props.again} >again?</button></Link> <br/>
            <Link to = '/'><button>Log Out</button></Link>
            </div>
            
        </div>
    )
}
