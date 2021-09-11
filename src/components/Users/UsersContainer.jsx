import {connect} from "react-redux";
import {getUsers, toggleFollow} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.usersPerPage)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.usersPerPage)
    }

    render() {
        return (
            <Users {...this.props} onPageChanged={this.onPageChanged}/>
        )
    }
}

let redirectedComponent = withAuthRedirect(UserContainer);

function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        usersPerPage: state.usersPage.usersPerPage,
        pagesCount: Math.ceil(state.usersPage.usersTotalCount / state.usersPage.usersPerPage),
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgressUsers: state.usersPage.followingInProgressUsers,
    }
}

export default connect(mapStateToProps,{getUsers, toggleFollow})(redirectedComponent);