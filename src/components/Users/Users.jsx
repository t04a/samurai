import React from "react";
import User from "./User/User";
import axios from "axios";
import style from './Users.module.css'

class Users extends React.Component {
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
        let userElements = this.props.users.map(u => <User key={u.id} user={u} onToggleFollow={this.props.toggleFollow}
                                                           onSetUsers={this.props.setUsers}/>);
        let pages = [];
        for (let i = 1; i <= this.props.pagesCount; i++) {
            pages.push(i)
            if (i >= 24) {
                break;
            }
        }
        let paginationElements = pages.map(p => (
            <span className={`${style.pagEl} ${this.props.currentPage === p ? style.selected : undefined}`}
                  onClick={() => this.onPageChanged(p)}>{p}</span>));

        return (
            <div>
                <div>
                    {paginationElements}
                </div>
                {userElements}
            </div>
        )
    }
}

export default Users;

/*
function Users(props) {
    // debugger
    function getUsers() {
        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items);
            })

            /!*props.setUsers(
                [
                    {
                        id: 1, firstName: 'Dmitry',
                        lastName: 'K.',
                        userStatus: 'I am looking for a job',
                        location: {
                            country: 'Russia',
                            city: "Moscow",
                        },
                        isFollow: true,
                        avatar: 'https://foreignpolicy.com/wp-content/uploads/2017/03/gettyimages-474375985.jpg?w=800&h=528&quality=90',
                    },
                    {
                        id: 2, firstName: 'Alex',
                        lastName: 'D.',
                        userStatus: 'I am looking for a job too',
                        location: {
                            country: 'Belarus',
                            city: "Minsk",
                        },
                        isFollow: false,
                        avatar: 'https://foreignpolicy.com/wp-content/uploads/2017/03/gettyimages-474375985.jpg?w=800&h=528&quality=90',
                    }
                ]
            )*!/
        }
    }

    let usersElements = props.users.map(u => <User key={u.id} user={u} onToggleFollow={props.toggleFollow}
                                                   onSetUsers={props.setUsers}/!*onFollow={props.follow} onUnfollow={props.unfollow}*!/ />);

    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {usersElements}
        </div>
    )
}

export default Users;*/
