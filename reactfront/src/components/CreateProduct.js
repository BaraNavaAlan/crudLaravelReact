import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/product'

export const CreateProduct = () => {
    const [descripcion, setDescripcion] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
  const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {descripcion: descripcion, price: price, stock: stock})
        navigate('/')
    }


  return (
    <div>
        <h3>Create Product</h3>

        <form onSubmit={store}> 
            <div className='mb-3'>
                <label className='form-label'>
                    Descripcion 
                </label>
                <input 
                    value={descripcion}
                    onChange={ (e)=> setDescripcion(e.target.value) }
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>
                    Precio 
                </label>
                <input 
                    value={price}
                    onChange={ (e)=> setPrice(e.target.value) }
                    type='number'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>
                    Estock 
                </label>
                <input 
                    value={stock}
                    onChange={ (e)=> setStock(e.target.value) }
                    type='number'
                    className='form-control'
                />
            </div>

            <button type='submit' className='btn btn-primary'>Save</button>
        </form>
    </div>
  )
}


export default CreateProduct