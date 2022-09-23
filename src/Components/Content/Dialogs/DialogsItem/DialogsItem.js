import React from 'react';
import UserItem from "./UserItem/UserItem";
import MessageItem from "./MessageItem/MessageItem";

const DialogsItem = ({usersData, messagesData}) => {

    let messagesElements = messagesData.map(
        (message, i) => <li  key={i}><MessageItem message={message.message}/></li>
    )

    let usersElements = usersData.map(
        (user, i) => <li key={i} ><UserItem name={user.name} id={user.id}/></li>
    )

    return(
        <div className='dialogsItem'>
            <div className='dialogsItem_users'>
                {usersElements}
            </div>
            <div className='dialogsItem_messages'>

                {messagesElements}

            </div>
        </div>
    )
}