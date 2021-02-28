import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import './Player.css'



const Player = (props) => {
    const {name,img,fee,club,nationality,position}=props.player;
    return (
        
            <div className="col text-center player">
                <h3>{name}</h3>
                <img className="player-img" src={img} alt=""/>
                <p>Position: {position}</p>
                <p>Nationality: {nationality}</p>
                <p>Present Club:{club}</p>
                <h5>Transfer Fee: ${fee}M</h5>
                <button className="btn btn-dark" onClick={()=>props.addPlayerClick(props.player)}><FontAwesomeIcon icon={faFutbol}  /> Add Player</button>
            </div>
        
    );
};

export default Player;