let initialState = {
    friends: [
        {name: "Andrew"},
        {name: "Sasha"},
        {name: "Sveta"},
    ]
};

function navbarReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default navbarReducer;