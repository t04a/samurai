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
                ...action.userAuthData,
                isAuth: true
            }
        }
        default: {
            return state;
        }
    }
}

// action creators
export const setUserAuthDataAC = (userId, login, email) => ({type: SET_USER_AUTH_DATA, userAuthData: {userId, login, email}});

// thunk creators
export const getUserAuthData = () => {
    return (dispatch) => {
        authAPI.auth().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setUserAuthDataAC(id, login, email));
            }
        })
    }
}

export default authReducer;