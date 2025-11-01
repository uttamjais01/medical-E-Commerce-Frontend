import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { FaShoppingCart } from "react-icons/fa";

const OrderCount = () => {

    const [orderCount , setOrderCount] = useState(null)

    useEffect(()=>{
        const fetchOrderCount = async ()=>{
            try {
                const res = await axios.get('http://localhost:3000/product/countOrder', {
                    withCredentials: true
                })
                setOrderCount(res.data.totalOrder)
                toast.success(res.data.message)                
            } catch (error) {
              toast.error(error?.response?.data?.message)                
            }
        }
        

    })

  return (
    <div className='bg-zinc-700 p-6 text-white m-5 mr-10 rounded-xl shadow-md border w-72 h-32 flex items-center justify-between'>
        <FaShoppingCart className='text-6xl'/>
        <h1 className='m-2 text-2xl'>Total Order : </h1>
       {orderCount === null ? (
  <div className="animate-pulse h-6 w-32 bg-gray-200  rounded"></div>
) : (
  <span className='font-semibold  text-4xl'> {orderCount}</span>
)}
    </div>
  )
}

export default OrderCount