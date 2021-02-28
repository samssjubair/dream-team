import React from 'react';
import './AddedPlayers.css'

const AddedPlayers = (props) => {
    const players=props.addedPlayers;
    const totalFee=players.reduce((acc,val)=>acc+=val.fee,0);
    return (
        <div>
            <h3 style={{color:'black'}}>Number of player added: {props.addedPlayers.length}</h3>
            <h4>Total Transfer Money: ${totalFee}M</h4>
            <h4>Your Team: </h4>
            {
                players.map(pl=> <div className="short-detail"> <p>{pl.name}</p> <p>{pl.fee}</p> </div> )
            }
        </div>
    );
};

export default AddedPlayers;