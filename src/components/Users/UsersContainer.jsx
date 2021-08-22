import {connect} from "react-redux";
import {
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    toggleFollowAC,
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import axios from "axios";

class UserContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersPerPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })

    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersPerPage}`)
            .then(response => {
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.setUsers(response.data.items);
            })
    }


    render() {
        return (
            <Users
                users={this.props.users}
                toggleFollow={this.props.toggleFollow}
                setUsers={this.props.setUsers}
                pagesCount={this.props.pagesCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        usersPerPage: state.usersPage.usersPerPage,
        pagesCount: Math.ceil(state.usersPage.usersTotalCount / state.usersPage.usersPerPage),
        currentPage: state.usersPage.currentPage,
    }
}

function mapDispatchToProps(dispatch) {
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

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);