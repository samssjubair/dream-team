import React from 'react';

const Player = (props) => {
    const {name,img,fee,club,nationality,position}=props.player;
    return (
        <div>
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <p>{position}</p>
            <p>{nationality}</p>
            <p>{club}</p>
            <h4>{fee}</h4>
            <button onClick={()=>props.addPlayerClick(props.player)}>Buy Player</button>
        </div>
    );
};

export default Player;