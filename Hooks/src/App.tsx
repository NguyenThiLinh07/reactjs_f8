import React from "react";
import "./App.css";
import LinhUseStateVd1 from "./Components/LinhUseStateVd1";
import LinhUseStateVd2 from "./Components/LinhUseStateVd2";
import RandomGift from "./Components/RandomGift";
import TwoWayVD1 from "./Components/TwoWayVD1";
import TwoWayVD2 from "./Components/TwoWayVD2";
import Todolist from "./Components/Todolist";
import AppUseEffect from "./Components/AppUseEffect";

function App() {
  return (
    <div className="App">
      <LinhUseStateVd1 />
      <LinhUseStateVd2 />
      <RandomGift />
      <TwoWayVD1/>
      <TwoWayVD2/>
      <Todolist/>
      <AppUseEffect/>
    </div>
  );
}

export default App;
