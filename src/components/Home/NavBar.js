import { Link } from 'react-router-dom'
import React, {useState} from 'react'
import './Navbar.css'
import Modal from 'react-modal'
import ModalContent from './ModalContent'
import { Button } from '@material-ui/core'

const NavBar = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal(){
        setModalIsOpen(true);
    }
    function closeModal(){
        setModalIsOpen(false);
    }
    return (
        <div className='navbar'>
            <ul>
                <li><Button onClick={openModal}>Places</Button> 
                <Modal 
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                >
                    <ModalContent />
                </Modal>
                </li> 
                <li><Button onClick={openModal}>Binomi</Button>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                    >
                        <ModalContent /> 
                    </Modal>
                </li>
            </ul>
        </div>
    )
}

export default NavBar