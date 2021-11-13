import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getUsername, setUsername, setPassword, getPassword } from "../store/reducers/login";


export const useLogin = () => {
    const [required, setrequired] = useState()
    const username = useSelector(getUsername)
    const password = useSelector(getPassword)
    const navigation = useNavigate()

    const loginHandler = useCallback(() => {
        const usernameIsMatched = username === 'brian'
        const passwordIsMatched = password === 'brian'
        if (usernameIsMatched && passwordIsMatched) navigation('/summary')
        else setrequired(true)
    }, [username, password])

    const requiredColor = required && 'border-red-500'

    return {
        requiredColor,
        loginHandler,
        setUsername,
        setPassword
    }
}