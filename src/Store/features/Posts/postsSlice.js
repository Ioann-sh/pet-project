import {createSlice} from "@reduxjs/toolkit";
import appState from "../../../Redux/State";

function idGenerator(){
    let id = Math.round(Math.random()*(1048576+16777215)+1048576).toString(16); //65535
    return id;

}

function checkId(){

}

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        postsData: [
            {id: 1, message: 'post1'},
            {id: 2, message: 'post2'},
            {id: 3, message: 'post3'}
        ]
    },
    reducers: {
        addPost: (state, post) => {
            //console.log();
            if (post.payload.trim() != ''){
                state.postsData.push({id: idGenerator(), message: post.payload})
            }
            console.log(state.postsData)
        },
        deletePost: (state, id) => {
            state.postsData.forEach((post, index) => { if (id.payload === postsSlice.getInitialState().postsData[index].id){
                //delete postsSlice.getInitialState().postsData[index]
            }
                console.log(state);
                // console.log(post);
                console.log(id)
            })
        }

    }
});

export const {addPost, deletePost} = postsSlice.actions;
export  default postsSlice.reducer;