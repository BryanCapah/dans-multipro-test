import { createSlice } from "@reduxjs/toolkit";
import { getJobs, searchJobs } from "../../apis/summary";


const initialState = {
    list: [],
    loading: false,
    page: 0
}

const job = createSlice({
    name: 'job',
    initialState,
    extraReducers: {
        [searchJobs.pending]: (state) => {
            state.loading = true
        },
        [searchJobs.fulfilled]: (state, { payload }) => {
            state.page = state.page + 1
            state.loading = false
            state.list = payload
        },
        [searchJobs.rejected]: (state) => {
            state.loading = false
        },

        [getJobs.pending]: (state) => {
            state.loading = true
        },
        [getJobs.fulfilled]: (state, { payload }) => {
            state.page = state.page + 1
            state.loading = false
            state.list = state.list.concat(payload)
        },
        [getJobs.rejected]: (state) => {
            state.loading = false
        },


    }
})

//getter
export const getJobList = state => state.job.list
export const getPage = state => state.job.page
export const getLoading = state => state.job.loading

export default job.reducer