import axios from "axios";
import React, { useState, useEffect } from "react";

import "./App.css";
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false
function App() {

  const [coin,setCoins]= useState([])




  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
     
      }).catch((error) => {
        console.log(error);
      },[]);
  });

  return (
    <div className="App">
      <h1>Apii</h1>
    </div>
  );
}

export default App;
