import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

function Dialogs(props) {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)

    function sendNewMessage(values) {
        console.log(values.newMessageText);
        props.sendMessage(values.newMessageText)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <ReduxAddMessageForm onSubmit={sendNewMessage}/>
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);

function AddMessageForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name={'newMessageText'}
                   placeholder={'Enter your message'}
                   validate={[required, maxLength50]}/>
            <button>Send message</button>
        </form>
    )
}

let ReduxAddMessageForm = reduxForm({form: 'AddMessageForm'})(AddMessageForm)

export default Dialogs;