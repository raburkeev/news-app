/*eslint-disable*/
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import authorsService from '../services/authors.service'

export const loadAuthors = createAsyncThunk(
    'authors/loadAuthors',
    async (_, {rejectWithValue}) => {
        try {
            return await authorsService.fetchAll()
        } catch (e) {
            return rejectWithValue('Произошла ошибка при загрузке списка авторов. Попробуйте обновить страницу или нажмите кнопку обновить.')
        }
    }
)

const authorsSlice = createSlice({
    name: 'authors',
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {},
    extraReducers: {
        [loadAuthors.pending]: (state) => {
            state.isLoading = true
            state.error = false
        },
        [loadAuthors.fulfilled]: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
        [loadAuthors.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
})

const {reducer: authorsReducer, actions} = authorsSlice
const {} = actions

export const getAuthorsList = () => (state) => state.authors.entities
export const getAuthorsLoadingStatus = () => (state) => state.authors.isLoading
export const getAuthorsError = () => (state) => state.authors.error
export const getAuthorById = (authorId) => (state) => state.authors.entities ? state.authors.entities.find((item) => item.id === authorId) : {}

export default authorsReducer
