import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

let usersData = [
    {id: 1, name: 'name1'},
    {id: 2, name: 'name2'},
    {id: 3, name: 'name3'}
];

let messagesData = [
    {id: 1, message: 'message1'},
    {id: 2, message: 'message2'},
    {id: 3, message: 'message3'}
];

let postsData = [
    {id: 1, message: 'post1'},
    {id: 2, message: 'post2'},
    {id: 3, message: 'post3'}
]

root.render(
    <React.StrictMode>

        <App usersData={usersData} messagesData={messagesData} postsData={postsData}/>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
