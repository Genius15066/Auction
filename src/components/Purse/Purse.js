import React from 'react';
import PurchasedPlayerList from '../PurchasedPlayerList/PurchasedPlayerList';
import './Purse.css'

const Purse = (props) => {
    const purse=props.purse;
    let total=purse.reduce((sum,plyr)=>sum+plyr.salary,0)
    let totalCost=total.toFixed(2);

    return (
        <div>
            <div className="purse-calculation">
                <h1>Team News</h1>
                <h5>Number of Player purchased: {purse.length}</h5>
                <h5>Purchased Cost: ₹ {Number(totalCost)} cr</h5>
              
            </div>
            <div className="player-purchased-area">
                <h2 >Sold Player List : {purse.length}</h2>
                {
                     purse.map(player=><PurchasedPlayerList player={player}></PurchasedPlayerList>)
                }
            </div>
        </div>
    );
};

export default Purse;