/*eslint-disable*/
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import newsReducer from './news'
import authorsReducer from './authors'
import commentsReducer from './comments'
import pagesReducer from './pages'

const rootReducer = combineReducers({
    news: newsReducer,
    authors: authorsReducer,
    comments: commentsReducer,
    pages: pagesReducer
})

export function createStore() {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
        })
    })
}
