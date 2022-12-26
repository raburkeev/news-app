/*eslint-disable*/
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import authorsService from '../services/authors.service'

export const loadAuthors = createAsyncThunk(
    'authors/loadAuthors',
    async () => {
        try {
            const data = await authorsService.fetchAll()
            return data
        } catch (e) {
            console.log(e.message)
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

export default authorsReducer
