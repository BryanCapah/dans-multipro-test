import { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getJobs, searchJobs } from "../apis/summary"
import { getJobList, getPage } from "../store/reducers/job"
import store from '../store/store'

export const useSummary = () => {
    const jobList = useSelector(getJobList)
    const page = useSelector(getPage)

    const [param, setParam] = useState({
        description: '',
        location: '',
        full_time: false,
        page: 0
    })

    const getJobLists = useCallback((props) => {
        console.log(props);
        store.dispatch(getJobs({
            description: '',
            location: '',
            full_time: false,
            page: page + 1
        }))
            .unwrap()
            .then()
            .catch(e => alert(e.message))
    },
        [param, page])

    const search = useCallback((props) => {
        const { description, location, full_time, page } = param
        store.dispatch(searchJobs({
            description,
            location,
            full_time,
            page: page + 1
        }))
            .unwrap()
            .then()
            .catch(e => alert(e.message))
    },
        [param, page])

    useEffect(_ => {
        getJobLists()
    }, [])

    const onChange = useCallback((e, name) => {
        const { value } = e.target
        if (name === 'full_time') {
            return setParam(current => ({ ...current, [name]: !param.full_time }))
        }
        else setParam(current => ({ ...current, [name]: value }))
    }, [])

    const onClick = () => {
        search()
    }


    return { jobList, getJobLists, onChange, onClick }
}