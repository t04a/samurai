const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_USER_IS_FOLLOWING = 'TOGGLE_USER_IS_FOLLOWING';

let initialState = {
    users: [],
    usersTotalCount: 0,
    usersPerPage: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgressUsers: [],

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
                            followed: !u.followed,
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
        case TOGGLE_USER_IS_FOLLOWING: {
            return {
                ...state,
                followingInProgressUsers: action.isFollowing ?
                    [...state.followingInProgressUsers, action.userId] :
                    state.followingInProgressUsers.filter((id) => id !== action.userId)
            }
        }
        default: {
            return state;
        }
    }
}

export function toggleFollow(userId) {
    return {
        type: TOGGLE_FOLLOW,
        userId,
    }
}

export function setUsers(users) {
    return {
        type: SET_USERS,
        users,
    }
}

export function setUsersTotalCount(usersTotalCount) {
    return {
        type: SET_USERS_TOTAL_COUNT,
        usersTotalCount,
    }
}

export function setCurrentPage(currentPage) {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    }
}

export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const toggleUserIsFollowing = (userId, isFollowing) => ({type: TOGGLE_USER_IS_FOLLOWING, userId, isFollowing})

export default usersReducer;