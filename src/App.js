//import logo from './logo.svg';
import './App.scss';
import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import {BrowserRouter} from "react-router-dom";

function App({usersData, messagesData, postsData}) {


    return (
        <div className="App">
            <Header/>
            <BrowserRouter>
                <Navbar/>
                <Content usersData={usersData} messagesData={messagesData} postsData={postsData}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
