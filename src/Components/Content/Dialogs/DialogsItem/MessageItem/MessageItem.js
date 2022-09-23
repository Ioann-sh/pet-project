import React from "react";
import './MessageItem.scss';

const MessageItem = ({message}) => {
    return (
        <div className='dialog_messages_item'>
            {message}
        </div>
    )
}

export default MessageItem;