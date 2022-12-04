import {
   TOGGLE__THEME,
   REQUEST__ERROR,
   REQUEST__SUCCESS,
   SEARCH__USER,
   REQUESTING,
   LOGIN,
} from '../constants'

export const toggleTheme = (payload) => ({
   type: TOGGLE__THEME,
   payload,
})

export const loadding = (payload) => ({
   type: REQUESTING,
   payload,
})

export const request = (setIsLoading) => async (dispatch) => {
   setIsLoading(true)
   try {
      const response = await fetch('http://localhost:3001/posts')
      const data = await response.json()
      dispatch({
         type: REQUEST__SUCCESS,
         payload: data,
      })
      setIsLoading(false)
   } catch (err) {
      dispatch({
         type: REQUEST__ERROR,
         payload: err,
      })
   }
}

export const searchUser = (value) => async (dispatch) => {
   try {
      const ApiUser = `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
         value
      )}&type=less`
      const res = await fetch(ApiUser)
      const dataUsers = await res.json()
      dispatch({
         type: SEARCH__USER,
         payload: dataUsers,
      })
   } catch (err) {}
}

export const login = (payload) => ({
   type: LOGIN,
})
