/*eslint-disable*/
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import newsService from '../services/news.service'

export const loadNews = createAsyncThunk(
    'news/loadNews',
    async (_, {rejectedWithValue}) => {
        try {
            const data = await newsService.fetchAll()
            return data
        } catch (error) {
            rejectedWithValue(error.message)
        }
    }
)

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {},
    extraReducers: {
        [loadNews.pending]: (state) => {
            state.isLoading = true
            state.error = null
        },
        [loadNews.fulfilled]: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
        [loadNews.rejected]: (state, action) => {
            console.log(action.payload)
            state.isLoading = false
            state.error = action.payload
        }
    }
})

const {reducer: newsReducer, actions} = newsSlice
const {} = actions

export const getNewsList = () => (state) => state.news.entities
export const getNewsLoadingStatus = () => (state) => state.news.isLoading

export default newsReducer
