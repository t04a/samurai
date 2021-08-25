import style from '../Users.module.css'
import userAvatar from '../../../assets/images/medved.jpg'
import {NavLink} from "react-router-dom";

function User(props) {

    function onToggleFollow(userId) {
        props.onToggleFollow(userId);
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
                    <button onClick={() => onToggleFollow(props.user.id)}>
                        {props.user.isFollow ? 'unfollow' : 'follow'}
                    </button>
                </div>
            </div>
            <div>
                <div>
                    {/*{props.user.firstName}*/}
                    {/*{props.user.lastName}*/}
                    {props.user.name}
                </div>
                <div>
                    {props.user.userStatus}
                </div>
                <div>
                    <div>
                        {/*{props.user.location.country}*/}
                    </div>
                    <div>
                        {/*{props.user.location.city}*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;