import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '47e0e515-c30e-433a-9b42-7d227534882e' }
})

export const usersAPI = {
  getUsers(page, pageSize) {
    return instance.get(`/users?page=${page}&count=${pageSize}`)
  },
  
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  
  unfollow(userId) {
    return instance.delete(`follow/${userId}` )
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId)
  }
}

export const authAPI = {
  getMe() {
    return instance.get('auth/me')
  }
}