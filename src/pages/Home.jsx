import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/tabs'
import ResultGrid from '../components/ResultGrid'
import { Link } from 'react-router-dom'
const Home = () => {
 
 
    return (
    <div>

      
        <SearchBar />
<Tabs />
<ResultGrid />

 
    </div>
  )
}

export default Home