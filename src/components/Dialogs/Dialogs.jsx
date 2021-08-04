import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

function Dialogs(props) {

    let state = props.store.getState();

    let dialogsElements = state.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.dialogsPage.messages.map( m => <Message message={m.message}/>)

    let newMessageText = state.dialogsPage.newMessageText

    function onSendMessage() {
        props.store.dispatch(sendMessageActionCreator());
    }

    function onNewMessageTextChange(e) {
        let newMessageText = e.target.value;
        props.store.dispatch(updateNewMessageTextActionCreator(newMessageText));
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }
                <textarea value={newMessageText} onChange={onNewMessageTextChange}/>
                <button onClick={onSendMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;