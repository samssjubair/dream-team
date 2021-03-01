import React from 'react';
import playerData from '../../data/data.json'
import { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './PlayerMarket.css';
import AddedPlayers from '../AddedPlayers/AddedPlayers';

const PlayerMarket = () => {
    const [players,setplayers]= useState([]);
    const [addedPlayers,setAddedPlayers]= useState([]);
    const addPlayerClick=(player)=>{
        const isAdded=addedPlayers.find(pl=>pl.id==player.id);
        if(isAdded){
            alert("A player can not be added twice");
        }
        else{
            const updatedPlayer=[...addedPlayers,player];
            setAddedPlayers(updatedPlayer); 
        }
    }

    useEffect(()=>{
        setplayers(playerData);
    },[])
    return (
        <div className="market">
            <div className="all-player">
                <div className="row row-cols-3">
                    {
                        players.map((player)=> <Player addPlayerClick={addPlayerClick} key={player.id} player={player}></Player> )
                    }
                
                </div>
            </div>
            <div className="added-player">
                <AddedPlayers  addedPlayers={addedPlayers}></AddedPlayers>
            </div>

        </div>
        
    );
};

export default PlayerMarket;