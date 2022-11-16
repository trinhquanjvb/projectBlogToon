import { TOGGLE__THEME, REQUEST__ERROR, REQUEST__SUCCESS } from '../constants'

export const toggleTheme = (payload) => ({
   type: TOGGLE__THEME,
   payload,
})

export const request = () => async (dispatch) => {
   try {
      const response = await fetch('http://localhost:3000/posts')
      const data = await response.json()
      dispatch({
         type: REQUEST__SUCCESS,
         payload: data,
      })
   } catch (err) {
      dispatch({
         type: REQUEST__ERROR,
         payload: err,
      })
   }
}
