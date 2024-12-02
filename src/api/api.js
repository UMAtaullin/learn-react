import axios from 'axios';

export const getUsers = (page, pageSize) => {
  return axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`,
      { withCredentials: true,
      headers: { 'API-KEY': '47e0e515-c30e-433a-9b42-7d227534882e' }}
    )
}

export const follow = (id) => {
  return axios.post(
    `https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
      withCredentials: true,
    headers: { 'API-KEY': '47e0e515-c30e-433a-9b42-7d227534882e' }
  })
}

export const unfollow = (id) => {
  return axios.delete(
    `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
    {
      withCredentials: true,
      headers: { 'API-KEY': '47e0e515-c30e-433a-9b42-7d227534882e' }
    })
}
