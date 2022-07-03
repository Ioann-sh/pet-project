//import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";

function App() {
  return (
    <div className="App">
        <Header/>
        <Navbar/>
        <Content/>
    </div>
  );
}

export default App;
