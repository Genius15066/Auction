import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import data from './fakeData/fakedata.json'
import './App.css'
import Player from './components/Player/Player';
import Purse from './components/Purse/Purse';

function App() {
  const [player, setPlayer] = useState([]);
  const [purse, setPurse] = useState([]);

  const handleAddPlayer = (player) => {
    if(purse.indexOf(player)===-1){
      const newPurse = [...purse,player];
      setPurse(newPurse);
    }  
    else{
      alert('The Player is already added')
    } 
  }

  useEffect(() => {
    setPlayer(data);
  }, [])
 

  return (
    <div className="App">
      <Header></Header>

      <div className="row auction-deatils-container">
        <div className="col-8 player-list">
          {
            player.map(player => <Player handleAddPlayer={handleAddPlayer} key={player.id}player={player} ></Player>)
          }
        </div>

        <div className="col-4 player-purchased-section">
          <Purse purse={purse}></Purse>
        </div>

      </div>

    </div>
  );
}

export default App;
