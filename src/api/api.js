import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '7ea93371-481e-4f33-9afe-6a3887928234'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, usersPerPage = 10) {
        return instance.get(`users?page=${currentPage}&count=${usersPerPage}`)
            .then(response => response.data)
    },
}

export const followAPI = {
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
}