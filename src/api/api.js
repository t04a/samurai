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

export const authAPI = {
    auth() {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login',{email, password, rememberMe})
            .then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login')
            .then(response => response.data)
    }

}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getProfileStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateProfileStatus(status) {
        return instance.put('profile/status', {status})
    },
    updateProfilePhoto(photoFile) {
        let formData = new FormData();
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        } )
    }
}