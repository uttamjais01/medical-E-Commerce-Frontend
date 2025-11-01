import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { HiOutlineUserGroup } from "react-icons/hi2";

const UserCount = () => {
    const [ userCount , setUserCount ] = useState(null)

    useEffect(()=>{
        const fetchUserCount = async()=>{
            try {
                const res = await axios.get('http://localhost:3000/user/count',{
                    withCredentials: true
                })
                setUserCount(res.data.totalUsers)
                toast.success(res.data.message)
            } catch (error) {
                toast.error(error?.response?.data?.message)
            }
        }
        fetchUserCount()
    }, [])

  return (
    <div className='bg-zinc-700 p-6 text-white m-5 mr-15 rounded-xl shadow-md border w-72 h-32 flex items-center justify-between'>
      <HiOutlineUserGroup className='text-6xl' />
      <h1 className='m-2 text-2xl'>Total User : </h1>
       {userCount === null ? (
  <div className="animate-pulse h-6 w-32 bg-gray-200  rounded"></div>
) : (
  <span className='font-semibold  text-4xl'> {userCount}</span>
)} </div>
  )
}

export default UserCount