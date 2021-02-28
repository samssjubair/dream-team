import React from 'react';
import './AddedPlayers.css'

const AddedPlayers = (props) => {
    const players=props.addedPlayers;
    const totalFee=players.reduce((acc,val)=>acc+=val.fee,0);
    return (
        <div>
            <h3 style={{color:'black'}}>Number of player added: {props.addedPlayers.length}</h3> <br/>
            
            <h4> <u>Your Team:</u>  </h4>
            {
                players.map(pl=> <div className="short-detail"> <p>{pl.name}</p> <p>${pl.fee}M</p> </div> )
            }
            <h5>Total Transfer Money Spent: ${totalFee}M</h5>
        </div>
    );
};

export default AddedPlayers;