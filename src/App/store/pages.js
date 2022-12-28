/*eslint-disable*/
import {createSlice} from '@reduxjs/toolkit'

const pagesSlice = createSlice({
    name: 'pages',
    initialState: {
        pageSize: 10,
        currentPage: 1
    },
    reducers: {
        pageSizeChanged: (state, action) => {
            state.pageSize = action.payload
        },
        currentPageChanged: (state, action) => {
            state.currentPage = action.payload
        }
    }
})

const {reducer: pagesReducer, actions} = pagesSlice
export const {currentPageChanged} = actions

export const getCurrentPage = () => (state) => state.pages.currentPage

export default pagesReducer
