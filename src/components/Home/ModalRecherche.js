import React from 'react'


const ModalRecherche = ({setIsOpen}) => {
  return (
    <div className='modalRecherche'>
      <div className='modalRecherche-content'>
        <div className='modalRecherche-header'>
          <h4 className='modalRecherche-title'>Recherche des Maisons</h4>
          <button onClick={() => setIsOpen(false)} className="close-btn"><i class="bi bi-x"></i></button>
        </div>
        <hr />
        <fieldset>
          <legend for="localisation">Localisation : </legend>
          <select id='localisation' name='localisation'>
            <option value="">Selectioner une ville : </option>

            <option value="sousse">Sousse</option>
            <option value="bizerte">Bizerte</option>
            <option value="nabeul">Nabeul</option>
            <option value="tunis">Tunis</option>
            <option value="mahdia">Mahdia</option>
            <option value="monastir">monastir</option>
          </select>
        </fieldset>
        <hr />
        <fieldset>
          <legend>Select type of the house you want : </legend>
          <div>
          <input type="checkbox" id="villa" name="villa" value="villa" />
          <label for="villa">Villa (s+4, etc...)</label>
        </div>

        <div>
          <input type="checkbox" id="appartement" name="appartement" value="appartement" />
          <label for="appartement">Appartement (s+2 , s+3)</label>
        </div>

        <div>
          <input type="checkbox" id="studio" name="studio" value="studio" />
          <label for="studio">Studio (s+1, s+0)</label>
        </div>
        <div>
          <input type="checkbox" id="bureau" name="bureau" value="bureau" />
          <label for="bureau">Bureau</label>
        </div>
        </fieldset>
        <hr />
        <div>
            <label for="prix">Prix : </label>
            <input id="prix" type="range" min="40" max="3000"  steps={10}/>
        </div>
        <hr />
        <fieldset>
          <legend>Sexe : </legend>
          <div>
            <input type="checkbox" id="homme" name="homme" value="homme" />
            <label for="homme">Homme</label>
        </div>
        <div>
          <input type="checkbox" id="femme" name="femme" value="femme" />
          <label for="femme">Femme</label>
        </div>
        <div>
          <input type="checkbox" id="femme" name="femme" value="femme" />
          <label for="femme">Famille</label>
        </div>
        </fieldset>
        
        

        <button type='submit' className='btn-success'>Recherche</button>
      </div>
        
    </div>
  )
}

export default ModalRecherche