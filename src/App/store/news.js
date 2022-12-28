import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import newsService from '../services/news.service'

export const loadNews = createAsyncThunk(
    'news/loadNews',
    async (_, {rejectWithValue, getState}) => {
        const page = getState().pages.currentPage
        try {
            return await newsService.fetchAll(page)
        } catch (error) {
            return rejectWithValue('Произошла ошибка при загрузке списка новостей. Попробуйте обновить страницу или нажмите кнопку обновить.')
        }
    }
)

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        entities: null,
        totalCount: null,
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
            state.entities = action.payload.data
            state.totalCount = Number(action.payload.headers['x-total-count'])
            state.isLoading = false
        },
        [loadNews.rejected]: (state, action) => {
            console.log(action.payload)
            state.isLoading = false
            state.error = action.payload
        }
    }
})

const {reducer: newsReducer} = newsSlice

export const getNewsList = () => (state) => state.news.entities
export const getNewsLoadingStatus = () => (state) => state.news.isLoading
export const getNewsError = () => (state) => state.news.error
export const getNewsById = (newsId) => (state) => state.news.entities ? state.news.entities.find((item) => item.id === newsId) : {}
export const getTotalNewsCount = () => (state) => state.news.totalCount

export default newsReducer
