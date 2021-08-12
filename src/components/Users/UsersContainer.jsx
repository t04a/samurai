import {connect} from "react-redux";
import {followAC, setUsersAC, toggleFollowAC, unfollowAC} from "../../redux/users-reducer";
import Users from "./Users";

function f1(state) {
    // debugger
    return {
        users: state.usersPage.users,
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
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(f1, f2)(Users);