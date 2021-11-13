import { lazy, Suspense, useCallback } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from 'react-router-dom'
import { getUsername } from "../store/reducers/login";


export default function Screens() {
    const Loading = () => <div></div>
    const Summary = lazy(_ => import('./summary'))
    const Detail = lazy(_ => import('./detail'))
    const username = useSelector(getUsername)
    const validate = useCallback(() => {
        if (username !== 'brian') return <Navigate to={'/login'} />
    }, [username])
    validate()
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route
                        exact
                        path='/summary'
                        name='Summary'
                        element={<Summary />}
                    />
                    <Route
                        exact
                        path='/:id'
                        name='Detail'
                        element={<Detail />}
                    />
                </Routes>
            </Suspense>
        </div>
    )
}