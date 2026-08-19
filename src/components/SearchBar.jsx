import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'
const SearchBar = () => {
  const [text, setText] = useState('')
const dispatch = useDispatch()


  const submitHandler =(e)=>{
    e.preventDefault()
   dispatch(setQuery(text))
setText('')
}
  
    return (
    <div>
<form onSubmit={(e)=>{
    submitHandler(e)
}} className='flex px-10 py-10 bg-red-100 gap-10' >
    <input value={text}
     onChange={(e)=>{
        setText(e.target.value)
    }} required
     type="text" 
     className='border-2 w-full px-2 py-2 text-xl rounded outline-none' placeholder='searh anything' />
<button className='active:scale-95 cursor-pointer border-2 px-2 py-2 text-xl rounded ' >search</button>


</form>

    </div>
  )
}

export default SearchBar