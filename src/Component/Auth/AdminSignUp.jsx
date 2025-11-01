import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminSignUp = () => {
  const navigate = useNavigate()
  const [formData , setFormData] = useState({
    name: "",
    email: "",
    password: "" 
  })
  const [loading , setLoading] = useState(false)
  const handleChange = (e) => {
    const {name , value} = e.target
    setFormData((prev)=>({
      ...prev ,
      [name]: value 
      
    }))
  }
    const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true)
      try {
        
        const res = await axios.post("https://medical-e-commerce-backend-gamma.vercel.app/admin/",formData,{
          withCredentials : true 
        })
        toast.success(res.data.success)
        navigate('/admin/login')

        
      } catch (error) {
        toast.error(error?.response?.data?.message)

        
      }
      finally{
        setLoading(false)

      }
    


  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-fuchsia-800 via-purple-900 to-indigo-900   '>
      <div className='bg-white w-full max-w-md rounded-xl p-8 shadow-lg '>
    <div className='text-2xl text-center '>
      <h1 className='mb-6 text-3xl font-extrabold text-gray-800 tracking-wide'>Admin , SignUp to your Account</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"
        name='name'
        value={formData.name}
        onChange={handleChange}
        placeholder='Enter Admin Name'
        className='w-full mb-4 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500' />
        <input type="email"
        name='email'
        value={formData.email}
        onChange={handleChange}
        placeholder='Enter Admin Email'
        className='w-full mb-4 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500' />
        <input type="password"
        name='password'
        value={formData.password}
        onChange={handleChange}
        placeholder='Enter Admin Password'
        className='w-full mb-4 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500' />
        <button type='submit' disabled={loading} className={` w-full bg-purple-600 text-white py-2 ${
          loading ? 'cursor-not-allowed opacity-70': ''        }` }>
        {loading ? 'Signing up...': 'SignUp' }
        </button>
      </form>
    </div>
    </div>
    </div>
  )
}

export default AdminSignUp