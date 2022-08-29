import React from "react";
import './PostsItem.scss';

const PostsItem =({message})=>{
    return(
        <div className='posts_item'>
            {message}
        </div>
    )
}

export default PostsItem;