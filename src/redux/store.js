import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "first post", likesCount: 17},
                {id: 2, message: "second post", likesCount: 64},
                {id: 3, message: "third post", likesCount: 23},
                {id: 4, message: "fourth post", likesCount: 22},
                {id: 5, message: "fifth post", likesCount: 22},
            ],
            newPostText: '',
        },
        dialogsPage: {
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
            newMessageText: 'il',
        },
        navbarPage: {
            friends: [
                {name: "Andrew"},
                {name: "Sasha"},
                {name: "Sveta"},
            ]
        }
    },
    _callSubscriber() {
        console.log("state changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.navbarPage = dialogReducer(this._state.navbarPage, action);

        this._callSubscriber(this._state);
    },

}
window.store = store;

export default store;