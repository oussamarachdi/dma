import React from 'react'
import './Box.css'
const Box = () => {
    return (
        <div className='container'>

        <div className='box'>
            <div className='title'>Binomie</div>
            <div className='content'>
                <h2>Service</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis dolor consequuntur quisquam
          quae natus laboriosam recusandae inventore aliquid repudiandae error nobis incidunt laborum, modi eligendi
          voluptatum. Odio, labore dicta.</p>
          <a href='/'>Click Here</a>
        </div>
        </div>
          <h3>OFFERS</h3>
          <div className='offers'>
              <p>* WIFI</p>
              <br></br>
              <p>* Femme de mainage</p>
              <br></br>
              <p>* Chauffroie</p>
              <hr className='hrv'/>
          </div>
        </div>
    )
}

export default Box
