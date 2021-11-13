import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import Input from "../input";

export default function Search({ onChange, onClick }) {
    return (
        <div className='md:flex w-full p-5'>
            <Input
                id='description'
                title='Job Description'
                onChange={(e) => onChange(e, 'description')}
                placeholder='Filter by title, benefits, companies, expertise' />
            <Input
                id='location'
                title='Location'
                onChange={(e) => onChange(e, 'location')}
                placeholder='Filter by city, state, zip or country' />
            <div className='items-end flex justify-center md:mr-5'>
                <div className='flex items-center'>
                    <Checkbox
                        id='full_time'
                        onChange={(e) => onChange(e, 'full_time')}
                        style={{ height: 35, width: 35 }}
                        className='border-2 rounded-md md:mr-2' />
                    <span className='whitespace-nowrap'>
                        Fulltime Only
                    </span>
                </div>
            </div>
            <div className='flex-col flex justify-end'>
                <Button
                    onClick={onClick}
                    className='bg-gray-500 text-white px-10 py-2 w-1/6 rounded-md'>
                    Search
                </Button>
            </div>
        </div>
    )
}