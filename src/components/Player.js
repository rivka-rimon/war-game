import React,{useState,useEffect} from 'react';
import './Player.css';
import {Link} from 'react-router-dom';


export default function Player(props) {

    const [playerInfo , setPlayerInfo] = useState([]);

    useEffect(() => {
    setPlayerInfo(props.playerArr);
    })


    return (
        <div>
          <h2>my games:</h2>
          <table>
              <tr>
                  <td className="rightSide" >name</td>
                  <td>{playerInfo.name}</td>
              </tr>
              <tr>
                  <td className="rightSide">games number</td>
                  <td>{playerInfo.games}</td>
              </tr>
              <tr>
                  <td className="rightSide">My wining</td>
                  <td>{playerInfo.win}</td>
              </tr>
              <tr>
                  <td className="rightSide">My losses</td>
                  <td>{playerInfo.lost}</td>
              </tr>
          </table>
          <div>
            <Link to = '/game' id="againBtn"><button onClick={props.again} >Play</button></Link> <br/>
            <Link to = '/'><button>Log Out</button></Link>
            </div>
        </div>
    )
}
