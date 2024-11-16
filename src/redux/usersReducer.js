const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let initialState = {
  usersData: [],
  pageSize: 10,
  totalUsers: 77,
  currentPage: 5 ,
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
      return {...state, usersData: [...action.usersData] }
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage }
    default:
      return state;
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (usersData) => ({type: SET_USERS, usersData})
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage})

export default usersReducer