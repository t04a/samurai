import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

function DialogsContainer(props) {

    let state = props.store.getState().dialogsPage;

    function sendMessage() {
        props.store.dispatch(sendMessageActionCreator());
    }

    function updateNewMessageText(newMessageText) {
        props.store.dispatch(updateNewMessageTextActionCreator(newMessageText));
    }

    return (
        <Dialogs state={state} sendMessage={sendMessage} updateNewMessageText={updateNewMessageText}/>
    )
}

export default DialogsContainer;