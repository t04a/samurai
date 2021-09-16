import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

let initialState = {
    posts: [
        {id: 1, message: "first post", likesCount: 17},
        {id: 2, message: "second post", likesCount: 64},
        {id: 3, message: "third post", likesCount: 23},
        {id: 4, message: "fourth post", likesCount: 22},
        {id: 5, message: "fifth post", likesCount: 22},
    ],
    newPostText: '',
    userProfile: null,
    profileStatus: ''
};

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText,
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.userProfile,
            }
        }
        case SET_PROFILE_STATUS: {
            return {
                ...state,
                profileStatus: action.status,
            }
        }
        default: {
            return state;
        }
    }
}

//action creators
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});
export const setUserProfileAC = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status})

//thunk creators
 export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then(response => {
            dispatch(setUserProfileAC(response.data));
        })
    }
 }

 export const getProfileStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(userId)
            .then( response => {
                // console.log(response.data)
                dispatch(setProfileStatus(response.data))
            })
    }
 }

export const updateProfileStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateProfileStatus(status)
            .then( response => {
                console.log(response)
                if (response.data.resultCode === 0) {
                   dispatch(setProfileStatus(status))
                }
            })
    }
}


export default profileReducer;