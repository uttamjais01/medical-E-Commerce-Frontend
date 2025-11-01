import axios from 'axios'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { setAdmin } from '../Store/adminSlice'

const AdminLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [ loading , setLoading ] = useState(false)
  const [formData , setFormData ] = useState({
    email: '',
    password: '' 
  })
  const handleChange = (e) => {
    const {name , value} = e.target
    setFormData((prev)=>({
      ...prev ,
      [name]: value 

    }))
  }
  const handleSubmit = async (e) =>{
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post('http://localhost:3000/admin/login', formData ,{
        withCredentials: true
      }) 
      toast.success(res.data.message)
      console.log(res.data.data);
      
      dispatch(setAdmin(res.data.data))
      navigate('/admin/dashboard')
      
    } catch (error) {
      toast.error(error?.response?.data?.message)
      
    }finally{
      setLoading(false)
    }

  }
  
  return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-fuchsia-800 via-purple-900 to-indigo-900 '>
          <div className='w-full max-w-md bg-white shadow-lg rounded-xl p-8 '>
            <div className='text-center mb-5'>
              <h1 className='mb-6 text-3xl font-extrabold text-gray-800 tracking-wide'>Admin , Login To Your Account</h1>
              <form onSubmit={handleSubmit}>
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
                <button
                  type="submit" // ✅ this triggers form submission
                  disabled={loading}
                  className={`w-full bg-purple-600 text-white rounded ${
                   loading ? 'opacity-70 cursor-not-allowed' : ''
  }`}
>
  {loading ? 'Signing in...' : 'Login'}
</button>

              </form>
            </div>
          </div>
      
    </div>
  )
}

export default AdminLogin