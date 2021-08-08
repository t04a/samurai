import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

function f1(state) {
    return {
        state: state.dialogsPage,
    }
}

function f2(dispatch) {
    return {
        updateNewMessageText: (newMessageText) => {
            dispatch(updateNewMessageTextActionCreator(newMessageText));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

export default connect(f1, f2)(Dialogs);