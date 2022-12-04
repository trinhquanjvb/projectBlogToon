import { LOGIN } from '../constants'

const innitState = {
   isLogin: localStorage?.getItem('accountUser') || false,
}

const reducerLogin = (state = innitState, action) => {
   switch (action.type) {
      case LOGIN:
         if (state.isLogin) {
            return { ...state }
         } else {
            return {
               ...state,
               isLogin: true,
            }
         }
      default:
         return state
   }
}

export default reducerLogin
