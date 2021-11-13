import { Button } from "@chakra-ui/button";
import JobListCard from "../../components/joblistcard";
import Search from "../../components/search"
import { useSummary } from "../../hooks/summary";

export default function Summary() {
    const { getJobLists, loading, onChange, onClick } = useSummary()
    if (loading) return <div>Loading</div>
    return (
        <div className='text-left'>
            <div
                className='bg-blue-500 w-full text-left px-5 py-3'
                style={{ fontSize: '2rem' }}>
                <span
                    className='font-bold'
                    style={{ color: 'white' }}>
                    GitHub
                </span>
                <span style={{ color: 'white' }}>{` Job`}</span>
            </div>
            <Search
                onChange={onChange}
                onClick={onClick} />
            <div
                className='font-bold mx-5'
                style={{ fontSize: '1.5rem' }}>Job List</div>
            <JobListCard />
            <div className='w-full mt-3 px-5'>
                <Button
                    onClick={() => getJobLists()}
                    style={{ width: '100%' }}
                    className='rounded-md bg-blue-500 text-white py-1 px-5'
                >Get more job </Button>
            </div>
        </div>
    )
}