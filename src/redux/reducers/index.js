import reducersHome from './reducersHome'
import reducerComponents from './reducerComponents'
import reducerLogin from './reducerLogin'

import { combineReducers } from 'redux'

const reducer = combineReducers({
   reducersHome,
   reducerComponents,
   reducerLogin,
})

export default reducer
