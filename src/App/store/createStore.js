import {combineReducers, configureStore} from '@reduxjs/toolkit'
import newsReducer from './news'
import authorsReducer from './authors'
import commentsReducer from './comments'

const rootReducer = combineReducers({
    news: newsReducer,
    authors: authorsReducer,
    comments: commentsReducer
})

export function createStore() {
    return configureStore({
        reducer: rootReducer
    })
}
