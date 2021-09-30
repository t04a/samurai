import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    let path = "/dialogs/" + props.id;
    return (
        <div className={`${style.dialogItem} ${style.active}`}>
            <NavLink to={path}  activeClassName={style.active}>
                <img className={style.avatar}
                     src={"https://i.pinimg.com/originals/2d/0f/50/2d0f50e8e4f6b233c7cf70b4bd36f89c.png"}
                     alt={'olol'}/>
                {props.name}
            </NavLink>
        </div>
    );
}

export default DialogItem;