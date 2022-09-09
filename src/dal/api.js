import axios from "axios"

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "65665b14-421e-4645-9922-37fbd2b4d531"},
})

export const UsersAPI = {
    FollowAPI(id, followLogic) {
        return !followLogic ? instance.post(`follow/${id}`) : instance.delete(`follow/${id}`)
    },
    getUsersAPI(page, count) {
        return instance.get(`users?page=${page}&count=${count}`).then(response => {
            return response.data
        })
    }
}

export const AuthAPI = {
    Me() {
        return instance.get(`auth/me`).then(respone => {

            return respone.data
        })
    },
    getAuth(data) {
        return instance.post(`auth/login`, data).then(response => {
            return response.data
        })
    },
    deleteAuth() {
        return instance.delete(`auth/login`).then(response => {
            return response.data
        })
    },
    getCaptcha() {
        return instance.get(`security/get-captcha-url`).then(response => {
            return response.data
        })
    },
}

export const ProfileAPI = {
    getProfile(ProfileID, MyID) {
        return instance.get(`profile/${ProfileID || MyID}`).then(response => {

            return response.data
        })
    },
    setStatus(text) {
        return instance.put(`profile/status`, {status: text}).then(respone => {
            return respone.data
        })
    },
    getStatus(userID) {
        return instance.get(`profile/status/${userID}`).then(respone => {
            return respone.data
        })
    },
    setNewAvatar(img) {
        return instance.put(`profile/photo`, {"image": img}, {
            headers: {"Content-Type": "multipart/form-data"}
        }).then(respone => {
            return respone.data
        })
    },

    setNewProfileInfo(data) {
        return instance.put(`profile`, data).then(respone => {
            return respone.data
        })
    },
}
