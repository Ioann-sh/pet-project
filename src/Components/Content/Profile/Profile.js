import React from "react";
import Posts from "./MyPosts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import './Profile.scss';

const Profile = ({postsData}) => {

    return (<>
            <h1>Profile</h1>
            <div className='profile'>
                <ProfileInfo name={'name'} id={0}/>
                <Posts postsData={postsData}/>
            </div>
        </>
    )
}

export default Profile;