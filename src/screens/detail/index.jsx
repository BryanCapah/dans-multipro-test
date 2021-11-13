import { faArrowLeft } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router'
import { useDetail } from '../../hooks/detail'

export default function Detail() {

    const { detail } = useDetail()
    const navigate = useNavigate()
    return <div className='m-3'>
        <div
            onClick={() => navigate('/summary')}
            className='flex items-center cursor-pointer w-min mb-3 text-blue-500'>
            <FontAwesomeIcon
                style={{
                    fontSize: '2rem',
                    width: 15,
                    borderRadius: 100,
                    height: 15,
                }}
                icon={faArrowLeft} />
            <span className='font-bold'>Back</span>
        </div>

        <div className='border-8 rounded-sm text-left p-5'>
            <div className='text-gray-500'>{`${detail?.type} / ${detail?.location}`}</div>
            <div style={{ fontSize: '2rem' }}>{detail?.title}</div>
            <hr />
            <div className='flex  justify-between mt-5'>
                <div className='md:w-1/2' dangerouslySetInnerHTML={{ __html: detail?.description }} />
                <div className='md:w-1/2 flex justify-center'>
                </div>
            </div>
        </div>
    </div>
}