export function getUsers(state) {
    return state.usersPage.users
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