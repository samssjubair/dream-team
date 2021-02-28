import React from 'react';
import playerData from '../../data/data.json'
import { useEffect, useState } from 'react';
import Player from '../Player/Player';

const PlayerMarket = () => {
    const [players,setplayers]= useState([]);
    const [addedPlayers,setAddedPlayers]= useState([]);
    const addPlayerClick=(player)=>{
        const updatedPlayer=[...addedPlayers,player];
        setAddedPlayers(updatedPlayer);
    }

    useEffect(()=>{
        setplayers(playerData);
    },[])
    return (
        <div>
            <div>
                {
                    players.map((player)=> <Player addPlayerClick={addPlayerClick} key={player.id} player={player}></Player> )
                }
               
            </div>
            <div>
                <h1>added {addedPlayers.length}</h1>
            </div>
        </div>
    );
};

export default PlayerMarket;