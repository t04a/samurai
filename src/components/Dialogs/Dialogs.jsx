import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

function Dialogs(props) {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/>)

    let textAreaEl = React.createRef();

    function alertMessageText() {
        let text = textAreaEl.current.value;
        alert(text);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }
                <textarea ref={textAreaEl}></textarea>
                <button onClick={alertMessageText}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;