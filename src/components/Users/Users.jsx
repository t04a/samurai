import User from "./User/User";

function Users(props) {
    // debugger
    if (props.users.length === 0) {
        props.setUsers(
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
        )
    }
    let usersElements = props.users.map(u => <User key={u.id} user={u} onToggleFollow={props.toggleFollow}
                                                   onSetUsers={props.setUsers}/*onFollow={props.follow} onUnfollow={props.unfollow}*/ />);

    return (
        <div>
            {usersElements}
        </div>
    )
}

export default Users;