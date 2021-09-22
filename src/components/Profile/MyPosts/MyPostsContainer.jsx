import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

function f1(state) {
    return {
        state: state.profilePage
    }
}

function f2(dispatch) {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

let MyPostContainer = connect(f1, f2)(MyPosts);

export default MyPostContainer;
