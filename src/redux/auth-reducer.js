import {authAPI} from "../api/api";

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';

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
export const setUserAuthDataAC = (userId, login, email, isAuth) => ({type: SET_USER_AUTH_DATA, payload:
        {userId, login, email, isAuth}});

// thunk creators
export const getUserAuthData = () => {
    return (dispatch) => {
        authAPI.auth().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setUserAuthDataAC(id, login, email, true));
            }
        })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getUserAuthData());
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserAuthDataAC(null, null, null, false));
            }
        })
    }
}

export default authReducer;