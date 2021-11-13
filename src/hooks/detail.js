
import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { getJobById } from '../apis/summary'
import { getDetail } from '../store/reducers/job'
import store from '../store/store'
export const useDetail = () => {
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const detail = useSelector(getDetail)
    const getJobDetail = useCallback((props) => {
        store.dispatch(getJobById({ id }))
            .unwrap()
            .then()
            .catch(e => alert(e.message))
    },
        [])

    useEffect(() => {
        getJobDetail()
    }, [])

    return { detail }
}