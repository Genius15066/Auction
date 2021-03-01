import React from 'react';
import BoughtPlayer from '../BoughtPlayer/BoughtPlayer';
import './Purse.css'

const Purse = (props) => {
    const purse=props.purse;
    let total=purse.reduce((sum,plyr)=>sum+plyr.salary,0)
    let totalCost=total.toFixed(2);
    return (
        <div>
            <div className="purse-calculation">
                <h1>Auction Info</h1>
                <h5>Number of Player: {purse.length}</h5>
                <h5>Purchased Cost: ₹ {Number(totalCost)} cr</h5>
            </div>
            <div className="player-purchase">
                <h2 >Sold Player List : {purse.length}</h2>
                {
                     purse.map(player=><BoughtPlayer player={player}></BoughtPlayer>)
                }
            </div>
        </div>
    );
};

export default Purse;