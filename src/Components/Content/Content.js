import React from "react";
import {Routes, Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import Settings from "./Settings/Settings";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import './Content.scss'


const Content = ({profilePageData, dialogsPageData, addPost}) => {

    return (
        <div className='Content'>
            <Routes>
                <Route path='/*' element={<News/>}/>
                <Route path='/news/' element={<News/>}/>
                <Route path='/dialogs/*' element={<Dialogs usersData={dialogsPageData.usersData} messagesData={dialogsPageData.messagesData}/>}/>
                <Route path='/profile/' element={<Profile postsData={profilePageData.postsData} profileData={profilePageData.profileData} addPost={addPost}/>}/>
                <Route path='/settings/' element={<Settings/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </div>
    )
}

export default Content;