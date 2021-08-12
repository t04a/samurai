import style from '../Users.module.css'

function User(props) {

    /*function onButtonFollow(userId) {
        props.onFollow(userId);
    }

    function onButtonUnfollow(userId) {
        props.onUnfollow(userId);
    }*/

    function onToggleFollow(userId) {
        props.onToggleFollow(userId);
    }

    return (
        <div className={style.user}>
            <div>
                <div>
                    <img className={style.avatar} src={props.user.avatar} alt="ololo"/>
                </div>
                {/*<div>
                    {props.user.isFollow ?
                        <button onClick={ () => onButtonUnfollow(props.user.id)}>unfollow</button> :
                        <button onClick={ () => onButtonFollow(props.user.id)}>follow</button>}
                </div>*/}
                <div>
                    <button onClick={() => onToggleFollow(props.user.id)}>
                        {props.user.isFollow ? 'unfollow' : 'follow'}
                    </button>
                </div>
            </div>
            <div>
                <div>
                    {props.user.firstName}
                    {props.user.lastName}
                </div>
                <div>
                    {props.user.userStatus}
                </div>
                <div>
                    <div>
                        {props.user.location.country}
                    </div>
                    <div>
                        {props.user.location.city}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;