import {sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

function mapStateToProps(state) {
    return {
        state: state.dialogsPage,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendMessage: (newMessageText) => {
            dispatch(sendMessageActionCreator(newMessageText))
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), /*withAuthRedirect*/)(Dialogs)