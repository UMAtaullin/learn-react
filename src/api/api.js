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
    console.log('Obsolete method. Please use profileAPI object.')
    return profileAPI.getProfile(userId)
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId)
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status })
  },
  savePhoto(photo) {
    const formData = new FormData()
    formData.append('image', photo)
    return instance.put(`profile/photo`, formData, { 
      headers: {
        'Content-Type': 'multipart/form-data'
      } 
    })
  },
}

export const authAPI = {
  getMe() {
    return instance.get('auth/me')
  },
  login(email, password) {
    return instance.post(`/auth/login`, { email, password })
  },
  logout() {
    return instance.delete(`/auth/login`)
  },
}