import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { toast } from 'react-toastify'

const Revenue = () => {
  const [revenueCount, setRevenueCount] = useState(null)

  useEffect(() => {
    const fetchRevenue = async () => {
      try {
        const res = await axios.get('https://medical-e-commerce-backend-gamma.vercel.app/product/revenue', {
          withCredentials: true,
        })
        setRevenueCount(res.data.totalRevenue)
        toast.success(res.data.message)
      } catch (error) {
        toast.error(error?.response?.data?.message || 'Failed to fetch revenue')
      }
    }
    fetchRevenue()
  }, [])

  return (
    <div className='bg-zinc-700 p-6 text-white m-5 rounded-xl shadow-md border w-72 h-32 flex items-center justify-between'>
      <RiMoneyDollarCircleLine className='text-6xl' />
      <div>
        <h1 className='text-xl font-medium'>Total Revenue : </h1>
        {revenueCount === null ? (
          <div className='animate-pulse h-6 w-20 bg-gray-300 rounded'></div>
        ) : (
          <span className='font-bold text-3xl'>₹{revenueCount}</span>
        )}
      </div>
    </div>
  )
}

export default Revenue