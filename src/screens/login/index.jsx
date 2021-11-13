import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { useDispatch } from "react-redux";
import { useLogin } from "../../hooks/login";

export default function Login() {
    const dispatch = useDispatch()
    const {
        requiredColor,
        loginHandler,
        setUsername,
        setPassword
    } = useLogin()

    return <div className='flex justify-center items-center h-full w-full flex-col'>
        <div className='font-bold' style={{ fontSize: '2rem' }}>Login</div>
        <br />
        <br />
        <div className='flex flex-col '>
            <Input
                placeholder='Input brian'
                className={`mb-3 border-2 rounded-md py-1 px-5 ${requiredColor}`}
                onChange={(e) => dispatch(setUsername(e.target.value))} />
            <Input
                placeholder='Input brian'
                className={`mb-3 border-2 rounded-md py-1 px-5 ${requiredColor}`}
                onChange={(e) => dispatch(setPassword(e.target.value))} />
            <Button
                className='rounded-md bg-green-300 py-1 px-5'
                onClick={loginHandler} >Login </Button>
        </div>
    </div>
}