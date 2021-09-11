import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

function mapStateToProps(state) {
    return {
        state: state.dialogsPage,
    }
}

// let redirectedComponent = withAuthRedirect(Dialogs)

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

// export default connect(mapStateToProps, mapDispatchToProps)(redirectedComponent);

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)