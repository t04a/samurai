import style from '../Users.module.css'
import userAvatar from '../../../assets/images/medved.jpg'
import {NavLink} from "react-router-dom";
import axios from "axios";

function User(props) {

    function onToggleFollow(userId) {

        props.user.followed ?
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
                withCredentials: true,
                headers: {
                    'API-KEY': '7ea93371-481e-4f33-9afe-6a3887928234'
                }
            })
                .then( response => {
                    if (response.data.resultCode === 0) {
                        props.onToggleFollow(userId);
                    }
                })
            :
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
                withCredentials: true,
                headers: {
                    'API-KEY': '7ea93371-481e-4f33-9afe-6a3887928234'
                }
            })
                .then( response => {
                    if (response.data.resultCode === 0) {
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