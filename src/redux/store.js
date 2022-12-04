import reducer from './reducers'

// import storage from 'redux-persist/lib/storage'
// import { persistReducer, persistStore } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'

// dùng configureStore chỉ cần reducer(rootReducer) là được

// const persistConfig = {
//    key: 'root',
//    storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
   reducer,
})

// import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'

// export const store = createStore(
//    reducer,
//    compose(
//       applyMiddleware(thunk),
//       window.__REDUX_DEVTOOLS_EXTENSION__ &&
//          window.__REDUX_DEVTOOLS_EXTENSION__()
//    )
// )
