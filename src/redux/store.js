import reducer from './reducers'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const myMiddleWare = thunk

export const store = createStore(reducer, applyMiddleware(myMiddleWare))
