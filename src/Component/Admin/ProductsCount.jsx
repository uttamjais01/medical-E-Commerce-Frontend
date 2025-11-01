import axios from 'axios'
import React, { useState , useEffect } from 'react'
import { toast } from 'react-toastify'
import { AiFillProduct } from "react-icons/ai";

const ProductsCount = () => {
    const [ productCount , setProductCount] = useState(null)

    useEffect(()=>{
        const fetchProductCount = async () => {
            try {
                const res = await axios.get('https://medical-e-commerce-backend-gamma.vercel.app/product/countProduct', {
                    withCredentials: true
                })
                setProductCount(res.data.totalProduct)
                toast.success(res.data.message)                
            } catch (error) {
                toast.error(error?.response?.data?.message)
                
            }
        }
        fetchProductCount()
    }, [])

  return (
    <div className='bg-zinc-700 p-6 text-white m-5 mr-8 rounded-xl shadow-md border w-72 h-32 flex items-center justify-between'>
      <AiFillProduct className='text-6xl' />
        <h1 className='m-2 text-xl'>Total Products : </h1>

      
       {productCount === null ? (
  <div className="animate-pulse h-6 w-32 bg-gray-200 rounded"></div>
) : (
  <span className='font-semibold  text-4xl'>{productCount}</span>
)} </div>
  )
}

export default ProductsCount