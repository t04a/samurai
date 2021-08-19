import {connect} from "react-redux";
import {
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    toggleFollowAC,
} from "../../redux/users-reducer";
import Users from "./Users";

function f1(state) {
    return {
        users: state.usersPage.users,
        usersPerPage: state.usersPage.usersPerPage,
        pagesCount: Math.ceil(state.usersPage.usersTotalCount / state.usersPage.usersPerPage),
        currentPage: state.usersPage.currentPage,
    }
}

function f2(dispatch) {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setUsersTotalCountAC(totalUsersCount))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        }
    }
}

export default connect(f1, f2)(Users);