//import logo from './logo.svg';
import './App.scss';
import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";


    function App({appState, addPost}) {
    return (
        <div className="App">
            <Header/>

                <Navbar/>
                <Content profilePageData={appState.profilePageData} addPost={addPost} dialogsPageData={appState.dialogsPageData}/>

        </div>
    );
}

export default App;
