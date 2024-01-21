
import styles from "./App.module.css"
import { useState, useEffect } from 'react';


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setCoins(json);
        setLoading(false);
      });
  })
  return (
    <div>
      <h2>The Coins! ({coins.length})</h2>
      {loading ? <strong> loading... </strong> : null}
      <ul>
        {/* {coins.map((coin) => <li key={coin.username}>{coin.name} ({coin.username}) : {coin.email} </li>)} */}
      </ul>
    </div>
  );
}

export default App;
