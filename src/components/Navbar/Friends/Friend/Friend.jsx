import style from './Friend.module.css'

function Friend(props) {
    return (
        <div className={style.item}>
            <img className={style.avatar}
                 src="https://i.pinimg.com/originals/1e/d9/df/1ed9df0815aa3ef960369b2f6254e246.jpg"
                 alt={'ololo'}/>
            <p>{props.name}</p>
        </div>
    );
}

export default Friend;