import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Navbar2 from '../Navbar2'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const GetProduct = () => {
  const [medicineBlock, setMedicineBlock] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/product/', {
          withCredentials: true
        })
        setMedicineBlock(res.data.products)
      } catch (error) {
        console.error('Error fetching products:', error.message)
      }
    }

    fetchProducts()
  }, [])

  const handleAddToCart = async (product) => {
  try {
    const res = await axios.post('http://localhost:3000/product/cart', {
      productId: product._id,
      quantity: 1
    }, {
      withCredentials: true
    })

    toast.success('Added to cart')
    setCart(prev => [...prev, product])
  } catch (error) {
    toast.error(error.response?.data?.message || 'Failed to add to cart')
    console.error('Add to cart error:', error)
  }
}


  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
        {medicineBlock.map((med) => (
          <div key={med._id} className='bg-white border border-blue-100 p-5 rounded shadow'>
            <Link to='/medicine'>
              <img src={med.imageUrl} alt={med.title} className='w-full h-[200px] object-cover rounded' />
              <h1 className='text-xl font-bold mt-2'>{med.title}</h1>
              <p className='text-sm text-gray-600'>{med.description}</p>
              <div className='flex justify-between mt-2'>
                <p className='text-green-600 font-semibold'>₹{med.price}</p>
                <p className='text-gray-500'>Stock: {med.stock}</p>
              </div>
            </Link>

            <button
              onClick={() => handleAddToCart(med)}
              className='bg-red-500 text-white w-full mt-4 py-2 rounded hover:bg-red-600 transition'
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GetProduct