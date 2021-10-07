import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_AUTH_DATA = 'samurai-network/auth/SET_USER_AUTH_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_AUTH_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
}

// action creators
export const setUserAuthDataAC = (userId, login, email, isAuth) => ({
    type: SET_USER_AUTH_DATA, payload:
        {userId, login, email, isAuth}
});

// thunk creators
export const getUserAuthData = () => async (dispatch) => {
    let data = await authAPI.auth();

    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setUserAuthDataAC(id, login, email, true));
    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe);
        if (data.resultCode === 0) {
            dispatch(getUserAuthData());
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}));
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let data = await authAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setUserAuthDataAC(null, null, null, false));
        }
    }
}

export default authReducer;