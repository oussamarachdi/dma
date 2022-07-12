import React, {useState} from 'react'
import Navbar from './NavBar'
import Box from './Box'
import "./Home.css"
import ModalRecherche from './ModalRecherche'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='home'>
            <Navbar />
            <div className='slider'>
                <div className='slides'>
                    
                </div>
                <button className='btnModal' onClick={()=>setIsOpen(true)}>Recherche</button>
                {
                    isOpen && (<ModalRecherche setIsOpen={setIsOpen}/>)
                }

            </div>
            <Box />
        </div>
    )
}

export default Home
