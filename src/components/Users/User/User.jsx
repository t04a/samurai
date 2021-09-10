import style from '../Users.module.css'
import userAvatar from '../../../assets/images/medved.jpg'
import {NavLink} from "react-router-dom";

function User(props) {
    return (
        <div className={style.user}>
            <div>
                <div>
                    <NavLink to={"/profile/" + props.user.id}>
                        <img className={style.avatar}
                             src={props.user.photos.small ?
                                props.user.photos.small :
                                userAvatar}
                             alt="avatar"/>
                    </NavLink>
                </div>
                <div>
                    <button
                        onClick={() => props.onToggleFollow(props.user.id, props.user.followed)}
                        disabled={props.followingInProgressUsers.some((users) => users === props.user.id)}>
                        {props.user.followed ? 'unfollow' : 'follow'}
                    </button>
                </div>
            </div>
            <div>
                <div>
                    {props.user.name}
                </div>
                <div>
                    {props.user.userStatus}
                </div>
            </div>
        </div>
    )
}

export default User;