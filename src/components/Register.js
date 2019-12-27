import React,{useState} from 'react'
import {Link} from 'react-router-dom';

export default function Register(props) {
    
    const[name , setName] = useState('');


    return (
        <div>
            <h2>ready for war?</h2>
            <input type="text" placeholder="enter your name" onChange={(n) =>
            {setName(n.target.value)}} /> <br/>
            <Link to = '/game'><button 
            onClick={()=> //check user name and send it to App
            {if(name == '') {return alert('enter your name!')} else{props.name(name); props.myCards(props.cards)} } }
            type="button">
            start</button>
            </Link>  
            
        </div>
    )
}
