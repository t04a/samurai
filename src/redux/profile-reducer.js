const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "first post", likesCount: 17},
        {id: 2, message: "second post", likesCount: 64},
        {id: 3, message: "third post", likesCount: 23},
        {id: 4, message: "fourth post", likesCount: 22},
        {id: 5, message: "fifth post", likesCount: 22},
    ],
    newPostText: '',
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
        default: {
            return state;
        }
    }
}

export function addPostActionCreator() {
    return {
        type: ADD_POST
    }
}

export function updateNewPostTextActionCreator(text) {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: text,
    }
}

export default profileReducer;