import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'
const Tabs = () => {
 const tabs =['photos' ,'videos']
const dispatch = useDispatch()
 
   const activeTab =  useSelector((state)=>state.search.activeTab)

  
  return (
    <div className='flex gap-5 p-10'>
{tabs.map(function(elem,idx){
    return (
     <button
onClick={()=>{
  dispatch(setActiveTabs(elem))
}}
    key={idx}
    className={`${(activeTab==elem?'bg-blue-500':'bg-gray-700')} px-5 transition cursor-pointer active:scale-95 rounded  py-2`} 
     key={idx}>{elem}</button>
    )
})}
    </div>
  )
}

export default Tabs