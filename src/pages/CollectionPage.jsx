import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'

import { clearCollection } from '../redux/features/collectionSlice'

const CollectionPage = () => {

  const dispatch = useDispatch()
  const clearAll = () => {
    dispatch(clearCollection())
  }
  const collection = useSelector(state => state.collection.items)
  return (
    <div >{collection.length > 0 ?  <div className='flex justify-between px-10 py-3'>
      <h1 className='text-2xl text-white'>{collection.length > 0 ? 'Your Collection' : 'Please Collect a Item'}</h1>
      <button onClick={() => {
        clearAll()
      }} className='bg-red-500 text-xs p-3 rounded text-white'>Clear Collection</button>
    </div> : <h2 className='text-4xl p-10 font-extrabold justify-center items-center w-full text-white'>Make Your First Collection... </h2>}
   
      <div className='flex justify-start overflow-auto px-10 flex-wrap w-full gap-6 rounded '>

        {collection.map((item, idx) => {
          return <div key={idx}>
            <CollectionCard item={item} />
          </div>
        })
        }


      </div></div>
  )
}

export default CollectionPage