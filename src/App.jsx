import React from 'react'
import SearchBar from './components/SearchBar'
import Tabs from './components/tabs'
import ResultGrid from './components/ResultGrid'
import Home from './pages/Home'
import CollectionPage from './pages/CollectionPage'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Navbar from './components/navbar'
 import { ToastContainer, } from 'react-toastify';
  
const App = () => {
  return (
    <div className='w-full min-h-screen bg-gray-950'>
<Navbar />

<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/collection' element={<CollectionPage />} 
  />
  
</Routes>
<ToastContainer />
 
 
    </div>
  )
}

export default App