import style from './Friends.module.css'
import Friend from "./Friend/Friend";

function Friends(props) {
    let friendElements = props.state.map( f => <Friend name={f.name}/>)
    return (
        <div>
            <p className={style.blockName}>Friends</p>
            <div className={style.friends}>
                {friendElements}
            </div>
        </div>
    );
}

export default Friends;