import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import newsService from '../services/news.service'

export const loadCommentsByNewsId = createAsyncThunk(
    'comments/loadCommentsByNewsId',
    async (newsId, {rejectWithValue}) => {
        try {
            return await newsService.getComments(newsId)
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        entities: null,
        isLoading: true,
        error: false,
        lastFetch: null
    },
    extraReducers: {
        [loadCommentsByNewsId.pending]: (state) => {
            state.isLoading = true
            state.error = false
        },
        [loadCommentsByNewsId.fulfilled]: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
        [loadCommentsByNewsId.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
})

const {reducer: commentsReducer} = commentsSlice

export const getCommentsList = () => (state) => state.comments.entities ? state.comments.entities : []
export const getCommentsLoadingStatus = () => (state) => state.comments.isLoading

export default commentsReducer
