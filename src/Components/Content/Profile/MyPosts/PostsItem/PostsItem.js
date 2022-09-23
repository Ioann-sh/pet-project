import React from "react";
import './PostsItem.scss';

const PostsItem =({message, id})=>{
    return(
        <div className='posts_item'>
            {message}
            <br></br>
            id: {id}
        </div>
    )
}

export default PostsItem;