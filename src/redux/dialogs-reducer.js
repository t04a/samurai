const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hi"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Fine"},
        {id: 5, message: "And you?"},
        {id: 6, message: "Same"},
        {id: 7, message: "Yo?"},
        {id: 8, message: "Yo))"},
    ],
};

function dialogReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.newMessageText}],
            }
        }
        default: {
            return state;
        }
    }
}

export const sendMessageActionCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})

export default dialogReducer;