import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

function Dialogs(props) {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)

    let newMessageText = props.state.newMessageText

    function onSendMessage() {
        props.sendMessage();
    }

    function onNewMessageTextChange(e) {
        let newMessageText = e.target.value;
        props.updateNewMessageText(newMessageText);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <textarea value={newMessageText} onChange={onNewMessageTextChange}/>
                <button onClick={onSendMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;