function rerenderEntireTree() {
    console.log("state changed");
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "first post", likesCount: 17},
            {id: 2, message: "second post", likesCount: 64},
            {id: 3, message: "third post", likesCount: 23},
            {id: 4, message: "fourth post", likesCount: 22},
            {id: 5, message: "fifth post", likesCount: 22},
        ],
        newPostText: 'Type here',
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Hi"},
            {id: 3, message: "How are you?"},
            {id: 4, message: "Fine"},
            {id: 5, message: "And you?"},
            {id: 6, message: "Same"},
            {id: 7, message: "Yo?"},
            {id: 8, message: "Yo))"},
        ],
    },
    navbarPage: {
        friends: [
            {name: "Andrew"},
            {name: "Sasha"},
            {name: "Sveta"},
        ]
    }
};

window.state = state;

export function addPost() {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export function updateNewPostText(newPostText) {
    state.profilePage.newPostText = newPostText;

    rerenderEntireTree(state);
}

export function subscribe(observer) {
    rerenderEntireTree = observer;
}

export default state;