import React from "react";
import './App.css'
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/navbar";
import RowPost from "./Components/RowPost/RowPost";
import {originals,actions } from './Urls';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>
        <Navbar/>
        <Banner/>
        <RowPost URL={originals} title = 'Netflix Originels'/>
        <RowPost URL={actions} title = 'Action' isSmall />
       </h1>
      </header>
    </div>
  );
}

export default App;
