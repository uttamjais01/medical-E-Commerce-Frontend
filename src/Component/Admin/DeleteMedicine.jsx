import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const DeleteMedicine =({ medicineId })=> {
  
  const navigate = useNavigate()
  const handleDelete = async ()=>{
    try {
    const res = await axios.delete(`https://medical-e-commerce-backend-gamma.vercel.app/product/delete/${medicineId}`,{
      withCredentials: true
    })
    toast.success(res.data.message)
    navigate('/admin/dashboard')
     setTimeout(() => {
        window.location.reload()
      }, 1000)
    
      
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to delete medicine')

      
    }

  }
  return (

    <button
      onClick={handleDelete}
      className='bg-red-500 text-white p-1 font-bold rounded hover:bg-red-600 transition'
    >
      Confirm Delete
    </button>

  )
}

export default DeleteMedicine