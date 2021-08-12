import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    navbarPage: navbarReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;