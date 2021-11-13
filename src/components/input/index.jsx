import { Input } from "@chakra-ui/input";
export default function CInput({ title, placeholder, onChange }) {
    return (
        <div className='text-left md:mr-5 w-full'>
            <div className={`font-bold mb-1 ${!title && 'hidden'}`}>{title}</div>
            <Input
                className='border-2 px-3 py-1 rounded-md w-full md:mb-0 mb-3'
                onChange={onChange}
                placeholder={placeholder} />
        </div>
    )
}