import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";


const endpoint = 'http://127.0.0.1:8000/api/product/'


const EditProduct = () => {
    const [descripcion, setDescripcion] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()
    const {id} = useParams()

    

    const update = async (e)  => {
        e.preventDefault()
         await axios.put(`${endpoint}${id}`,{
            descripcion: descripcion,
            price: price,
            stock: stock
        })
        navigate('/')
    }

    useEffect( () =>{
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setDescripcion(response.data.descripcion)
            setPrice(response.data.price)
            setStock(response.data.stock)
        }
        getProductById()
        // coment
    }, [])

    return (
        <div>
        <h3>Editar Product</h3>

        <form onSubmit={update}> 
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

            <button type='submit' className='btn btn-primary'>Update</button>
        </form>
    </div>
    )

}


export default EditProduct