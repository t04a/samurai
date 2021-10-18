import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const SET_PROFILE_PHOTO = 'SET_PROFILE_PHOTO';

let initialState = {
    posts: [
        {id: 1, message: "first post", likesCount: 17},
        {id: 2, message: "second post", likesCount: 64},
        {id: 3, message: "third post", likesCount: 23},
        {id: 4, message: "fourth post", likesCount: 22},
        {id: 5, message: "fifth post", likesCount: 22},
    ],
    userProfile: null,
    profileStatus: ''
};

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
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
        case SET_PROFILE_PHOTO: {
            return {
                ...state,
                userProfile: {
                    ...state.userProfile,
                    photos: action.photos
                }
            }
        }
        default: {
            return state;
        }
    }
}

//action creators
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfileAC = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status});
export const setProfilePhoto = (photos) => ({type: SET_PROFILE_PHOTO, photos});

//thunk creators
export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getUserProfile(userId);
        dispatch(setUserProfileAC(response.data));
    }
}

export const getProfileStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfileStatus(userId);
        dispatch(setProfileStatus(response.data))
    }
}

export const updateProfileStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateProfileStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(status))
        }
    }
}

export const uploadPhoto = (photoFile) => {
    return async (dispatch) => {
        let response = await profileAPI.updateProfilePhoto(photoFile);
        if (response.data.resultCode === 0) {
            dispatch(setProfilePhoto(response.data.data.photos))
            // console.log(response)
        }
    }
}


export default profileReducer;