import {connect} from "react-redux";
import {
    setCurrentPageAC, setIsFetchingAC,
    setUsersAC,
    setUsersTotalCountAC,
    toggleFollowAC,
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import axios from "axios";

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        setTimeout(() => {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersPerPage}`)
                .then(response => {
                    this.props.setIsFetching(false);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }, 500)
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        this.props.setIsFetching(true);
        setTimeout(() => {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersPerPage}`)
                .then(response => {
                    this.props.setIsFetching(false);
                    this.props.setTotalUsersCount(response.data.totalCount)
                    this.props.setUsers(response.data.items);
                })
        }, 500)
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
                isFetching={this.props.isFetching}
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
        isFetching: state.usersPage.isFetching,
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
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);