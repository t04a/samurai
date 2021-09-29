import {followAPI, usersAPI} from "../api/api";

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

/*action creators*/
export const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setUsersTotalCountAC = (usersTotalCount) => ({type: SET_USERS_TOTAL_COUNT, usersTotalCount});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleUserIsFollowingAC = (userId, isFollowing) => ({type: TOGGLE_USER_IS_FOLLOWING, userId, isFollowing});

/*thunk creators*/
export const requestUsers = (currentPage, usersPerPage) => {
    return (dispatch) => {
        dispatch(setCurrentPageAC(currentPage));
        dispatch(setIsFetchingAC(true));
        usersAPI.getUsers(currentPage, usersPerPage)
            .then(data => {
                dispatch(setIsFetchingAC(false));
                dispatch(setUsersAC(data.items));
                dispatch(setUsersTotalCountAC(data.totalCount));
            })
    }
}

export const toggleFollow = (userId, isFollow) => {
    return (dispatch) => {
        dispatch(toggleUserIsFollowingAC(userId, true));
        isFollow ?
            followAPI.unfollow(userId)
                .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(toggleFollowAC(userId));
                    }
                    dispatch(toggleUserIsFollowingAC(userId, false));
                })
            :
            followAPI.follow(userId)
                .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(toggleFollowAC(userId));
                    }
                    dispatch(toggleUserIsFollowingAC(userId, false));
                })
    }
}

export default usersReducer;