import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    navbarPage: navbarReducer,
    usersPage: usersReducer,
    auth:authReducer,
    form: formReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

let store = createStore(reducers, composedEnhancer);

export default store;