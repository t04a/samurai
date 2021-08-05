import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {

    let state = props.store.getState().profilePage;

    function addPost() {
        props.store.dispatch(addPostActionCreator());
    }

    function updateNewPostText(newPostText) {
        props.store.dispatch(updateNewPostTextActionCreator(newPostText));
    }

    return (
        <MyPosts addPost={addPost} updateNewPostText={updateNewPostText} state={state}/>
    );
}

export default MyPostsContainer;