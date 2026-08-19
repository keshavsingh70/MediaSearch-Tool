import { useDispatch } from "react-redux"
import { addedToast } from "../redux/features/collectionSlice"

import { addCollection } from "../redux/features/collectionSlice"
const ResultCard = ({ item }) => {

    const dispatch = useDispatch()
    const addToCollection = (item) => {

dispatch(addCollection(item))
dispatch(addedToast())
    
    
    }
    return (
        <div className=' w-[16vw] relative h-80 bg-transparent'>
            <div className='h-full'>
                {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
                {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video> : ''}
            </div>
            <div>
                <div id='bottom' className='flex justify-between  items-center  text-white h-[30%] px-3 w-full absolute bottom-0'> <h2 className='text-xs font-semibold py-6 capitalize'> {item.title}  </h2>
                    <button onClick={() => {
                        addToCollection(item)
                    }}
                        className='bg-blue-600 text-white rounded px-3 py-2 font-medium'>Save</button>
                </div>
            </div>
        </div>
    )
}

export default ResultCard