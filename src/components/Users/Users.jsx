import User from "./User/User";

function Users(props) {
    // debugger
    let usersElements = props.state.users.map(u => <User key={u.id} user={u} onToggleFollow={props.toggleFollow} /*onFollow={props.follow} onUnfollow={props.unfollow}*/ />);

    return (
        <div>
            {usersElements}
        </div>
    )
}

export default Users;