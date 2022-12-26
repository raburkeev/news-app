import {combineReducers, configureStore} from '@reduxjs/toolkit'
import newsReducer from './news'

const rootReducer = combineReducers({
    news: newsReducer
})

export function createStore() {
    return configureStore({
        reducer: rootReducer
    })
}
