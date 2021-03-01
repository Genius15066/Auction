import React from 'react';
import './BoughtPlayer.css'

const BoughtPlayer = (props) => {
    const { name, img,salary } = props.player;
    return (
        <div className="row bought-player">
            <div className="col-3 bought-player-img">
                <img src={img} alt="" />
            </div>
            <div className="col-8 bought-player-info">
                <h3>{name}</h3>
                <h6 style={{opacity:.7}}>Sold on : ₹ {salary} cr</h6>
            </div>
        </div>
    );
};

export default BoughtPlayer;