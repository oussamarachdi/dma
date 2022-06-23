import React from 'react'
import {Link} from "react-router-dom"

export const CreateProduct = () => {
  return (
    <div>
        <form>
            <div className='mb-3'>
                <label className='form-label'>Place: </label>
                <input className="form-control" type="text" placeholder='example:usa' required />
            </div>       
            <br/>
            <div className='mb-3'>
                <label className='form-label'>Title: </label>
                <input className="form-control" type="text" placeholder='example:Villa' required />
            </div>     
            <br />
            <div className='mb-3'>
                <label className='form-label'>description: </label>
                <textarea className="form-control" type="text" placeholder='example:usa' required />
            </div>     
            <br/>
            <div className='mb-3'>
                <label className='form-label'>Price: </label>
                <input className="form-control" type="number" placeholder='example:usa' required />
            </div>     
            <button type='submit' className='btn btn-success btn-xl'>Submit</button>
            <Link className='btn btn-danger btn-md' to="/">Cancel</Link>
        </form>
    </div>
  )
}
