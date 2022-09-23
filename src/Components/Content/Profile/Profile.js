import React from "react";
import Posts from "./MyPosts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import './Profile.scss';

const Profile = ({postsData, profileData, addPost}) => {

    return (<>
            <h1>Profile</h1>
            <div className='profile'>
                <ProfileInfo profileData={profileData}/>
                <Posts postsData={postsData} addPost={addPost}/>
            </div>
        </>
    )
}

export default Profile;