import React from 'react'
import {Button} from "@material-ui/core"
import './ModalContent.css'
import {Link} from 'react-router-dom'


const ModalContent = () => {
  return (
    <div className='modal'>
      <div className='dma-modal'>
      <h1>Dma</h1>
        <div>
            <p>Type : </p>
            <div>
                <input type="checkbox" id="appartement" name="appartement" value="appartement"/>
                <label htmlFor="appartement">Appartement (S+2,S+3)</label>
            </div>
            <div>
                <input type="checkbox" id="Studio" name="Studio" value="Studio" />
                <label htmlFor="Studio">Studio(S+1, S+0)</label>
            </div>
            <div>
                <input type="checkbox" id="Villa" name="Villa" value="Villa"  />
                <label htmlFor="Villa">Villa(S+4)</label>
            </div>
        </div>
        <hr/>
        <div>
          <p>Sexe:</p>
          <div>
                <input type="checkbox" id="Homme" name="Homme" value="Homme"/>
                <label htmlFor="Homme">Homme</label>
            </div>
            <div>
                <input type="checkbox" id="Femme" name="Femme" value="Femme" />
                <label htmlFor="Femme">Femme</label>
            </div>
        </div>
        <hr />
        <div>
          <p>Prix:</p>
          <input type="range" name="prix" min="0" max="10"/> 
          {/* More work on this  */}
        </div>
        <Button type="submit"><Link to='/places'>Recherche</Link></Button>
      </div>
        
    </div>
  )
}

export default ModalContent