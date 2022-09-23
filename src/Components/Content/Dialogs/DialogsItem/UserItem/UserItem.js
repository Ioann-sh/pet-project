import {NavLink} from "react-router-dom";
import React from "react";
import './UserItem.scss'

const UserItem = ({name, id}) => {
    return <>
            <NavLink to={"/dialogs/" + id} className='dialogs_users_item'>{name}</NavLink>
        </>

}

export default UserItem;