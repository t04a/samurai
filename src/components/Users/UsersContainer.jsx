import {connect} from "react-redux";
import {getUsers, toggleFollow} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";

class UserContainer extends React.Component {
    componentDidMount() {
        /*this.props.setIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.usersPerPage)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount)
            })*/
        this.props.getUsers(this.props.currentPage, this.props.usersPerPage)
    }

    onPageChanged = (pageNumber) => {
       /* this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.usersPerPage)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setUsersTotalCount(data.totalCount)
                this.props.setUsers(data.items);
            })*/
        this.props.getUsers(pageNumber, this.props.usersPerPage)
    }

    render() {
        return (
            /*<Users
                users={this.props.users}
                toggleFollow={this.props.toggleFollow}
                setUsers={this.props.setUsers}
                pagesCount={this.props.pagesCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                isFetching={this.props.isFetching}
            />*/
            <Users {...this.props} onPageChanged={this.onPageChanged}/>
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
        followingInProgressUsers: state.usersPage.followingInProgressUsers,
    }
}

export default connect(mapStateToProps,{getUsers, toggleFollow})(UserContainer);