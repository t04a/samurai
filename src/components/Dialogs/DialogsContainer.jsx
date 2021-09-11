import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        state: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateNewMessageText: (newMessageText) => {
            dispatch(updateNewMessageTextActionCreator(newMessageText));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);