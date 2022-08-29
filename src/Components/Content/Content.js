import React from "react";
import {Routes, Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import Settings from "./Settings/Settings";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import './Content.scss'


const Content = ({usersData, messagesData, postsData}) => {



    return (
        <div className='Content'>
            <Routes>
                <Route path='/*' element={<News/>}/>
                <Route path='/news/' element={<News/>}/>
                <Route path='/dialogs/*' element={<Dialogs usersData={usersData} messagesData={messagesData}/>}/>
                <Route path='/profile/' element={<Profile postsData={postsData}/>}/>
                <Route path='/settings/' element={<Settings/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </div>
    )
}

export default Content;