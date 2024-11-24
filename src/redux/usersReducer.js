const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
// const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
// const LOADING = 'LOADING'

let initialState = {
  users: [
        {
      id: 1,
      ava: 'https://imgcdn.stablediffusionweb.com/2024/5/20/a323743b-d287-4aff-bf1f-7923374b39a0.jpg',
      followed: true,
      name: 'Elon Musk',
      status: 'I am explorer',
      location: { country: 'USA', city: 'San Francisco' },
    },
    {
      id: 2,
      ava: 'https://scientificrussia.ru/images/n/3arn-large.jpg',
      followed: true,
      name: 'Yuri Gagarin',
      status: 'I am a cosmonaut',
      location: { country: 'Russia', city: 'Moscow' },
    },
    {
      id: 3,
      ava: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/800px-Donald_Trump_official_portrait.jpg',
      followed: false,
      name: 'Donald Trump',
      status: 'I am a politician',
      location: { country: 'USA', city: 'Washington' },
    },
  ],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
          users: state.users.map(user => {
            if (user.id === action.userId) {
              return {...user, followed: true }
            }
            return user
          })
        }
    case UNFOLLOW:
      return {
        ...state,
          users: state.users.map(user => {
            if (user.id === action.userId) {
              return {...user, followed: false }
            }
            return user
          })
        }
    case SET_USERS:
      return {
        ...state, 
         users: [...state.users,...action.users] }
    default:
      return state;
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer