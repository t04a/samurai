import {connect} from "react-redux";
import {requestUsers, toggleFollow} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgressUsers,
    getIsFetching, getUsers,
    getUsersPerPage,
    getUsersTotalCount
} from "../../redux/users-selectors";

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.usersPerPage)
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.usersPerPage)
    }

    render() {
        return (
            <Users {...this.props} onPageChanged={this.onPageChanged}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: getUsers(state),
        usersPerPage: getUsersPerPage(state),
        usersTotalCount: getUsersTotalCount(state),
        pagesCount: Math.ceil(getUsersTotalCount(state) / getUsersPerPage(state)),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgressUsers: getFollowingInProgressUsers(state),
    }
}

export default compose(connect(mapStateToProps,{requestUsers, toggleFollow}))(UserContainer)