import React from "react";
import './ProfileInfo.scss';

const ProfileInfo = ({profileData}) => {
    return (
        <div className='profile_info'>
            <div className='profile_info_ava'>
                <img alt='userpic' src={profileData[0].userpic}/>
            </div>
            <div className='profile_info_name'>{profileData[0].name}</div>
            <div className='profile_info_id'>Id: {profileData[0].id}</div>
            <hr></hr>
        </div>

    )
}

export default ProfileInfo;