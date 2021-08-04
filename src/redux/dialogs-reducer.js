const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

function dialogReducer(state, action) {
    switch (action.type) {
        case SEND_MESSAGE:
            state.messages.push({id: 6, message: state.newMessageText});
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
}

export function updateNewMessageTextActionCreator(text) {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text,
    }
}

export function sendMessageActionCreator() {
    return {
        type: SEND_MESSAGE,
    }
}

export default dialogReducer;