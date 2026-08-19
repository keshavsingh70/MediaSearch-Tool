import React from 'react'
import { useDispatch } from 'react-redux';
import { removeCollection, removeToast } from '../redux/features/collectionSlice';

const CollectionCard = ({item}) => {
  
  const dispatch = useDispatch()
  const removeFromCollection =( item)=>{
dispatch(removeCollection(item.id))
dispatch(removeToast())
  }
    return (
  
         <div className=' w-[16vw] relative h-80 bg-white '>
            <div className='h-full'>
                {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
                {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video> : ''}
            </div>
            <div>
                <div id='bottom' className='flex justify-between  items-center  text-white h-[30%] px-3 w-full absolute bottom-0'> <h2 className='text-xs font-semibold py-6 capitalize'> {item.title}  </h2>
                    <button onClick={() => {
                       removeFromCollection(item)
                        
                    }}
                        className='bg-blue-600 text-white rounded px-3 py-2 font-medium'>Remove</button>
                </div>
            </div>
        </div>
   
  )
}

export default CollectionCard