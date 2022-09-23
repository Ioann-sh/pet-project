import React from "react";
import {deletePost} from "../../../../../Store/features/Posts/postsSlice";

const PostDeleteButton = ({id}) => {
    return (<>
            <button className='posts_item_del' onClick={() => {deletePost(id)
            }}>del{id}
            </button>
        </>
    )
}

export default PostDeleteButton;