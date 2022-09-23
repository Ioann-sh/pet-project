import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import appState from "./Redux/State";
import {addPost} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";
import store from "./Store/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderApp = () => {
    root.render(
        <Provider store={store}>
            <BrowserRouter>
                <React.StrictMode>
                    <App appState={appState} addPost={addPost}/>
                </React.StrictMode>
            </BrowserRouter>
        </Provider>
    );
}

renderApp();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
