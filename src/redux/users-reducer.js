const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    usersTotalCount: 0,
    usersPerPage: 8,
    currentPage: 1,
    isFetching: false,
};

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            isFollow: !u.isFollow,
                        }
                    }
                    return u;
                }),
            }
        case SET_USERS: {
            return {
                ...state,
                users: action.users,
            }
        }
        case SET_USERS_TOTAL_COUNT: {
            return {
                ...state,
                usersTotalCount: action.usersTotalCount
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        default: {
            return state;
        }
    }
}

export function toggleFollowAC(userId) {
    return {
        type: TOGGLE_FOLLOW,
        userId,
    }
}

export function setUsersAC(users) {
    return {
        type: SET_USERS,
        users,
    }
}

export function setUsersTotalCountAC(usersTotalCount) {
    return {
        type: SET_USERS_TOTAL_COUNT,
        usersTotalCount,
    }
}

export function setCurrentPageAC(currentPage) {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    }
}

export function setIsFetchingAC(isFetching) {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    }
}

export default usersReducer;