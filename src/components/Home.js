import React from 'react'
import Navbar from './Home/NavBar'
import SearchBox from './Home/SearchBox'
import Box from './Home/Box'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <SearchBox />
            <Box />
        </div>
    )
}

export default Home
