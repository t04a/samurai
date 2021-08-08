import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

function f1(state) {
    return {
        state: state.profilePage
    }
}

function f2(dispatch) {
    return {
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        },
        updateNewPostText: (newPostText) => {
            let action = updateNewPostTextActionCreator(newPostText);
            dispatch(action);
        },
    }
}

let MyPostContainer = connect(f1, f2)(MyPosts);

export default MyPostContainer;
