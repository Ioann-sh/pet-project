import React from "react";
import PostsItem from "./PostsItem/PostsItem";
import './Posts.scss';


const Posts = ({postsData}) => {



    let postsElements = postsData.map(
        (post, i) => <li key={i}><PostsItem message={post.message}/></li>
    )

    return (
        <div className='posts'>
            <h3>My Posts</h3>
            <div className='posts_addPost'>
                <div className='posts_addPost_textarea'>
                    <textarea></textarea>
                </div>
                <div className='posts_addPost_button'>
                    <button>Add Post</button>
                </div>
            </div>
            <div className='posts_items'>
                <ul>
                    {postsElements}
                </ul>
            </div>
        </div>
    )
}

export default Posts;