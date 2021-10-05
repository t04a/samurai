import profileReducer, {addPostActionCreator} from "./profile-reducer";
// 1. test data
let state = {
    posts: [
        {id: 1, message: "first post", likesCount: 17},
        {id: 2, message: "second post", likesCount: 64},
        {id: 3, message: "third post", likesCount: 23},
        {id: 4, message: "fourth post", likesCount: 22},
        {id: 5, message: "fifth post", likesCount: 22},
    ]
};

// 2. action
// 3. expectation

test('length of posts should be incremented', () => {
    let action = addPostActionCreator('ololo1')

    let result = profileReducer(state, action)

    expect(result.posts.length).toBe(6)
})

test('message of new post should be corrected', () => {
    let action = addPostActionCreator('ololo1')

    let result = profileReducer(state, action)

    expect(result.posts[5].message).toBe('ololo1')
})