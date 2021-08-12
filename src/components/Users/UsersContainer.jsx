import {connect} from "react-redux";
import {followAC, toggleFollowAC, unfollowAC} from "../../redux/users-reducer";
import Users from "./Users";

function f1(state) {
    // debugger
    return {
        state: state.users,
    }
}

function f2(dispatch) {
    return {
        /*follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },*/
        toggleFollow: (userId) => {
            dispatch(toggleFollowAC(userId))
        }
    }
}

export default connect(f1, f2)(Users);