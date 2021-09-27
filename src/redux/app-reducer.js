import {getUserAuthData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default: {
            return state;
        }
    }
}

// action creators
export const initializedSuccessAC = () => ({type: INITIALIZED_SUCCESS});

// thunk creators
export const initializeApp = () => (dispatch) => {
    Promise.all([dispatch(getUserAuthData())])
        .then(() => {
            dispatch(initializedSuccessAC())
        })
    console.log('Initializing success')
}


export default appReducer;