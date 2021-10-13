import {createSelector} from "reselect";

export const getUsers = createSelector([getUsersSelector, getOlolo], (users) => {
    return users
})

function getUsersSelector(state) {
    return state.usersPage.users
}

function getOlolo(state) {
    return state.app.isOlolo
}

export function getUsersPerPage(state) {
    return state.usersPage.usersPerPage
}

export function getCurrentPage(state) {
    return state.usersPage.currentPage
}

export function getIsFetching(state) {
    return state.usersPage.isFetching
}

export function getFollowingInProgressUsers(state) {
    return state.usersPage.followingInProgressUsers
}

export function getUsersTotalCount(state) {
    return state.usersPage.usersTotalCount
}