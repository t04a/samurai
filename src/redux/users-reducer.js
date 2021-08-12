const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1, firstName: 'Dmitry',
            lastName: 'K.',
            userStatus: 'I am looking for a job',
            location: {
                country: 'Russia',
                city: "Moscow",
            },
            isFollow: true,
            avatar: 'https://foreignpolicy.com/wp-content/uploads/2017/03/gettyimages-474375985.jpg?w=800&h=528&quality=90',
        },
        {
            id: 2, firstName: 'Alex',
            lastName: 'D.',
            userStatus: 'I am looking for a job too',
            location: {
                country: 'Belarus',
                city: "Minsk",
            },
            isFollow: false,
            avatar: 'https://foreignpolicy.com/wp-content/uploads/2017/03/gettyimages-474375985.jpg?w=800&h=528&quality=90',
        },
    ],
};

function usersReducer(state = initialState, action) {
    switch (action.type) {
        /*case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFollow: true}
                    }
                    return u;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFollow: false}
                    }
                    return u;
                }),
            }*/
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
                users: [...state.users, ...action.users],
            }
        }
        default: {
            return state;
        }
    }
}

/*export function followAC(userId) {
    return {
        type: FOLLOW,
        userId,
    }
}

export function unfollowAC(userId) {
    return {
        type: UNFOLLOW,
        userId,
    }
}*/

export function toggleFollowAC(userId) {
    return {
        type: TOGGLE_FOLLOW,
        userId,
    }
}

export function setUsersAC() {

}

export default usersReducer;