import React, { useState } from 'react'
import {useNavigate , Link} from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate()
  const [formData , setFormData] = useState({
    email: "",
    password: ""
  })
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const {name , value} = e.target
    setFormData((prev)=>({
      ...prev ,
    [name]: value

    }))
  }
  const handleSubmit = async (e)=> {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post('http://localhost:3000/user/login', formData,{
        withCredentials: true 
      })
      toast.success(res.data.success)
      navigate('/')
      
    } catch (error) {
      toast.error(error?.response?.data?.message)
      
    }finally{
      setLoading(false)

    }

    

  }
  return (
<div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-fuchsia-800 via-purple-900 to-indigo-900'>
      <div className='w-full max-w-md bg-white shadow-lg rounded-xl p-8'>
        <div className='text-2xl text-center '>
          <h1 className='mb-6 text-3xl font-extrabold text-gray-800 tracking-wide'>Login To Your Account</h1>
          <form onSubmit={handleSubmit}>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='email'
              required
              className='w-full mb-4 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='password'
              required
              className='w-full mb-4 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
            <button
              type='submit'
              disabled={loading}
              className={`my-1 mt-4 px-4 py-2 ml-60 bg-purple-600 text-white rounded-lg flex items-center justify-center transition-all duration-300 ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <span className='animate-spin h-10 w-10 border-2 border-t-transparent border-white rounded-full'></span>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </div>
        <h1 className='text-xl ml-1 text-center'>
          If you don't have an account{' '}
          <Link className='text-blue-400' to='/signUp'>
            please sign up
          </Link>
        </h1>
        <h1 className='text-xl ml-1 text-center'>
          If Admin ? <Link className='text-blue-400' to='/admin/login' > SignIn</Link>

        </h1>
      </div>
    </div>

  )
}

export default Login