import { TOGGLE__THEME, REQUEST__SUCCESS } from '../constants'

const innitState = {
   isToggleTheme: false,
   responseContent: [],
   isLoading: false,
}

const reducersHome = (state = innitState, action) => {
   switch (action.type) {
      case TOGGLE__THEME:
         return {
            ...state,
            isToggleTheme: action.payload,
         }
      case REQUEST__SUCCESS:
         const newResponseContent = action.payload
         return {
            ...state,
            responseContent: [...newResponseContent],
         }
      default:
         return state
   }
}

export default reducersHome
