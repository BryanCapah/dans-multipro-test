import { Table, Tr, Td, Tbody } from "@chakra-ui/react";
import { useNavigate } from "react-router";

import { useSummary } from "../../hooks/summary"

export default function JobListCard({ data }) {
    const height = document.documentElement.clientHeight - 270
    const { jobList } = useSummary()
    const navigate = useNavigate()
    return (
        <div className='mx-5 px-3 py-3 border-2 rounded-md' style={{ maxHeight: height, overflow: 'scroll' }}>
            <Table className='w-full'>
                <Tbody>
                    {
                        jobList?.map((data, idx) => {
                            if (data) return (
                                <Tr onClick={() => navigate(`/summary/${data?.id}`)} key={idx} className='cursor-pointer'>
                                    <Td>
                                        <div className='mb-3'>
                                            <div className='text-blue-500'>{data?.title}</div>
                                            <div className='text-left '>
                                                <span className='text-gray-300'>{`${data?.company} - `}</span>
                                                <span className='text-green-500'>{data?.type}</span>
                                            </div>
                                        </div>
                                    </Td>
                                    <Td>
                                        <div>
                                            <div className='text-gray-500'>{data?.location}</div>
                                            <div className='text-gray-300'>{data?.created_at}</div>
                                        </div>
                                    </Td>
                                </Tr>
                            )
                        })
                    }
                </Tbody>
            </Table>
        </div>
    )
}