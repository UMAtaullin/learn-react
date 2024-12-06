import { usersAPI } from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const DISABLED_BUTTON = 'DISABLED_BUTTON'

let initialState = {
  users: [],
  pageSize: 5,
  totalCount: 77,
  currentPage: 1,
  isFetching: false,
  disabledButton: [],
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
         users: [...action.users] }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case DISABLED_BUTTON:
      return {
        ...state,
        disabledButton: action.isDisabling
          ? [...state.disabledButton, action.userId]
          : state.disabledButton.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setDisabledButton = (isDisabling, userId) => ({ type: DISABLED_BUTTON, isDisabling, userId})



export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    usersAPI.getUsers(currentPage, pageSize)
      .then((response) => {
        dispatch(toggleIsFetchingAC(false))
        dispatch(setUsersAC(response.data.items))
      })
  }
}

export const followThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(setDisabledButton(true, userId));
    usersAPI.follow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followAC(userId));
      }
      dispatch(setDisabledButton(false, userId));
    });
  }
}

export const unfollowThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(setDisabledButton(true, userId));
    usersAPI.unfollow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowAC(userId));
      }
      dispatch(setDisabledButton(false, userId));
    });
  }
}

export default usersReducer 