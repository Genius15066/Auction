import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
   const{name,salary,nationality,img} = props.player;
   const handleAddPlayer=props.handleAddPlayer;
    return (
        <div className=" player-card">
            <img  src={img} alt=""/>
            <h3 style={{color:'#193A8B'}}>{name}</h3>
            <h6 style={{color:'#581845'}}>{nationality}</h6>
            <h6 style={{opacity:.7}}>Auction Price: ₹{salary}cr</h6>
            <button onClick={() =>handleAddPlayer(props.player)} className="btn btn-success mt-2"><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faPlus} />Add Player</button>
        </div>
    );
};

export default Player;