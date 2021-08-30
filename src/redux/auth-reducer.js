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

export const setUserAuthData = (userId, login, email) => ({type: SET_USER_AUTH_DATA, userAuthData: {userId, login, email}});

export default authReducer;