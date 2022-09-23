import React from 'react';
import './Dialogs.scss';
import MessageItem from "./DialogsItem/MessageItem/MessageItem";
import UserItem from "./DialogsItem/UserItem/UserItem";

const Dialogs = ({usersData, messagesData}) => {

    let messagesElements = messagesData.map(
        (message, i) => <li key={i}><MessageItem message={message.message}/></li>
    )

    let usersElements = usersData.map(
        (user, i) => <li key={i}><UserItem name={user.name} id={user.id}/></li>
    )
    return (<>
            <h1>Messages</h1>
            <div className='dialogs'>
                <div className='dialogs_users'>
                    <ul>
                        {usersElements}
                    </ul>
                </div>
                <div className='dialogs_messages'>
                    <ul>
                        {messagesElements}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Dialogs;