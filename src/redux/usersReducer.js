const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  usersData: [
    { id: 1, ava: 'https://imgcdn.stablediffusionweb.com/2024/5/20/a323743b-d287-4aff-bf1f-7923374b39a0.jpg', followed: true, name: 'Elon Musk', status: 'I am explorer', location: {country: 'USA', city: 'San Francisco'} },
    { id: 2, ava: 'https://scientificrussia.ru/images/n/3arn-large.jpg', followed: true, name: 'Yuri Gagarin', status: 'I am a cosmonaut', location: {country: 'Russia', city: 'Moscow'} },
    { id: 3, ava: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/800px-Donald_Trump_official_portrait.jpg', followed: false, name: 'Donald Trump', status: 'I am a politician', location: {country: 'USA', city: 'Washington'} },
    //...more users
  ]
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return (
        {...state,
          usersData: state.usersData.map(user => {
            if (user.id === action.userId) {
              return {...user, followed: true }
            }
            return user
          })
        }
      )
    case UNFOLLOW:
      return (
        {...state,
          usersData: state.usersData.map(user => {
            if (user.id === action.userId) {
              return {...user, followed: false }
            }
            return user
          })
        }
      )
    case SET_USERS:
      return {
        ...state, 
        usersData: [...state.users, ...action.usersData] 
      }
    default:
      return state;
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (usersData) => ({type: SET_USERS, usersData})

export default usersReducer