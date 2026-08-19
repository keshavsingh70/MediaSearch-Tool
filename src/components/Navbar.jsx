import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-green-400'>
          <div className='text-center  items-center py-6 px-5  text-2xl flex justify-between '>
           <h2 className=' text-black  font-bold'> Images/Videos Search Tool
       </h2> 
        <div className='flex items-center gap-5 text-2xl '>
         <Link className='bg-white text-black text-xs rounded p-3' to='/'>Search</Link>
         <Link className='bg-white text-black text-xs rounded p-3' to='/collection'>Collection</Link>
        </div>
         </div>
    </div>
  )
}

export default Navbar