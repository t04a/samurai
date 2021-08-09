let initialState = {
    friends: [
        {id: 1, name: "Andrew"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Sveta"},
    ]
};

function navbarReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default navbarReducer;