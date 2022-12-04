import { SEARCH__USER } from '../constants'
const initialState = {
   dataUsers: [],
}

const reducerComponents = (state = initialState, action) => {
   switch (action.type) {
      case SEARCH__USER:
         return {
            ...state,
            dataUsers: [...action.payload.data],
         }
      default:
         return state
   }
}

export default reducerComponents
