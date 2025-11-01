import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const GetCart = () => {
    const [medicineBlock , setMedicineBlock] = useState([])

    useEffect(() => {
        
        const fetchCart = async () => {
            try {
                
            
            const res = await axios.get('https://medical-e-commerce-backend-gamma.vercel.app/product/cart/items',{
                withCredentials: true 
            })
            setMedicineBlock( res.data.cartItems)
            } catch (error) {
                console.error('Error fetching products:', error.message)

                
            }

        }
        fetchCart()

    },[])


  return (
     <div className='p-4'>
    <h2 className='text-2xl font-bold mb-4'>Your Cart</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {medicineBlock.map((item) => (
        <div key={item._id} className='bg-white border p-4 rounded shadow'>
          <img src={item.imageUrl} alt={item.title} className='w-full h-[200px] object-cover rounded' />
          <h3 className='text-lg font-semibold mt-2'>{item.title}</h3>
          <p className='text-sm text-gray-600'>Quantity: {item.quantity}</p>
          <p className='text-green-600 font-bold'>₹{item.totalAmount}</p>
        </div>
      ))}
    </div>
  </div>

  )
}

export default GetCart