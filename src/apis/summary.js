import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const jobs = async ({ description = '', location = '', full_time = false, page = 1 }) => {

    const data = await axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${description}&location=${location}&page=${page}&full_time=${full_time}`)
    return data?.data

}

export const getJobs = createAsyncThunk('job/getJobs', jobs)
export const searchJobs = createAsyncThunk('job/searchJobs', jobs)