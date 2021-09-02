import style from '../Users.module.css'
import userAvatar from '../../../assets/images/medved.jpg'
import {NavLink} from "react-router-dom";
import {followAPI} from "../../../api/api";

function User(props) {

    function onToggleFollow(userId) {

        props.user.followed ?
            followAPI.unfollow(userId)
                .then(data => {
                    if (data.resultCode === 0) {
                        props.onToggleFollow(userId);
                    }
                })
            :
            followAPI.follow(userId)
                .then(data => {
                    if (data.resultCode === 0) {
                        props.onToggleFollow(userId);
                    }
                })
    }

    return (

        <div className={style.user}>
            <div>
                <div>
                    <NavLink to={"/profile/" + props.user.id}>
                        <img className={style.avatar} src={props.user.photos.small ?
                            props.user.photos.small :
                            userAvatar}
                             alt="avatar"/>
                    </NavLink>
                </div>
                <div>
                    <button onClick={() => {
                        onToggleFollow(props.user.id)
                    }}>
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