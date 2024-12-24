import { authAPI } from '../api/api'

const SET_USER_DATA = 'ural/auth/SET_USER_DATA'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  ErrorMessage: null,
}

const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      }
    case LOGIN_SUCCESS:
      return { ...state, isAuth: true, errorMessage: null };
    case LOGIN_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state
    }
  }

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, login, email, isAuth }})

export const getUsersThunkCreator = () => 
  async (dispatch) => {
    const response = await authAPI.getMe()
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true))
    };
}

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await authAPI.login(email, password);
    if (response.data.resultCode === 0) {
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } else {
      // Отправляем общее сообщение об ошибке
      dispatch({ type: LOGIN_ERROR, payload: 'Invalid login or password. Please try again.' });
    }
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', payload: 'An error occurred. Please try again later.' });
  }
};


export const logout = () => async (dispatch) => {
  const response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export default authReducer