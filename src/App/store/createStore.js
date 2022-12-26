import {combineReducers, configureStore} from '@reduxjs/toolkit'
import newsReducer from './news'
import authorsReducer from './authors'

const rootReducer = combineReducers({
    news: newsReducer,
    authors: authorsReducer
})

export function createStore() {
    return configureStore({
        reducer: rootReducer
    })
}
