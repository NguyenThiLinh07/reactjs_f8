import React from "react";
import "./App.css";
import LinhUseStateVd1 from "./Components/LinhUseStateVd1";
import LinhUseStateVd2 from "./Components/LinhUseStateVd2";
import RandomGift from "./Components/RandomGift";
import TwoWay from "./Components/TwoWay";

function App() {
  return (
    <div className="App">
      <LinhUseStateVd1 />
      <LinhUseStateVd2 />
      <RandomGift />
      <TwoWay/>
    </div>
  );
}

export default App;
