import React from 'react'
import {Button} from "@material-ui/core"

const ModalContent = () => {
  return (
    <div className='modal'>
        <h1>Dma</h1>
        <div>
            <p>Type : </p>
            <div>
                <input type="checkbox" id="appartement" name="appartement" value="appartement"/>
                <label for="appartement">Appartement (S+2,S+3)</label>
            </div>
            <div>
                <input type="checkbox" id="Studio" name="Studio" value="Studio" />
                <label for="Studio">Studio(S+1, S+0)</label>
            </div>
            <div>
                <input type="checkbox" id="Villa" name="Villa" value="Villa"  />
                <label for="Villa">Villa(S+4)</label>
            </div>
        </div>
        <div>
          <p>Sexe:</p>
          <div>
                <input type="checkbox" id="Homme" name="Homme" value="Homme"/>
                <label for="Homme">Homme</label>
            </div>
            <div>
                <input type="checkbox" id="Femme" name="Femme" value="Femme" />
                <label for="Femme">Femme</label>
            </div>
        </div>
        <div>
          <p>Prix:</p>
          <input type="range" name="prix" min="0" max="10"/> 
          {/* More work on this  */}
        </div>
        <Button type="submit">Recherche</Button>
        
    </div>
  )
}

export default ModalContent