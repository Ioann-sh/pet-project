import React from "react";
import PostsItem from "./PostsItem/PostsItem";
import './Posts.scss';
import {useSelector, useDispatch} from "react-redux";
import {addPost, deletePost} from "../../../../Store/features/Posts/postsSlice";
import PostDeleteButton from "./PostDeleteButton/PostDeleteButton";

const Posts = () => {

    // let addPostElement = () => {
    //     let id = 5;                                             //временно
    //     let post = {id: id, message: newPostElement.current.value}
    //     if (post.message !== '') {
    //         //setPostsElements([...postsElements, post])
    //         addPost(post)
    //     }
    // }

    const posts = useSelector((state) => state.posts.postsData);
    const dispatch = useDispatch();


    function elementsMaker(postsData) {
        let postsElements = postsData.map(
            (post, i) => <li key={i}><PostsItem id={post.id} message={post.message}/>
                <PostDeleteButton id={post.id}></PostDeleteButton>
            </li>
        ).reverse();
        return postsElements
    }

    let newPostElement = React.createRef();

    return (
        <div className='posts'>
            <h3>My Posts</h3>
            <div className='posts_addPost'>
                <div className='posts_addPost_textarea'>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div className='posts_addPost_button'>
                    <button onClick={() => dispatch(addPost(newPostElement.current.value))}>Add Post</button>  {/*addPostElement*/}
                </div>
            </div>
            <div className='posts_items'>
                <ul>
                    {elementsMaker(posts)}  {/*elementsMaker(postsData)*/}
                </ul>
            </div>
        </div>
    )
}

export default Posts;