import React from 'react';
import './PurchasedPlayerList.css'

const PurchasedPlayerList = (props) => {
    const { name, img,salary } = props.player;
    return (
        <div className="row purchased-player">

            <div className="col-3 purchased-player-img">
                <img src={img} alt="" />
            </div>

            <div className="col-8 purchased-player-info">
                <h3>{name}</h3>
                <h6 style={{opacity:.7}}>Sold on : ₹ {salary} cr</h6>
            </div>

        </div>
    );
};

export default PurchasedPlayerList;