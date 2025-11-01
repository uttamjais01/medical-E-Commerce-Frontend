import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { clearAdmin } from '../Store/adminSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Logo from '../../assets/logo2.png'


const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const admin = useSelector((state) => state.admin.admin)
  const handleLogout =  async ( )=>{
    try {
     const res = await axios.get('http://localhost:3000/admin/logout', {
        withCredentials: true 
      })
      dispatch(clearAdmin())
      toast.success(res.data.message)
      navigate('/admin/login')
    } catch (error) {
      toast.error(error.response?.data?.message)
      
    }

  }

  return (
   <div className='flex w-full h-20 bg-black items-center text-4xl text-white p-4'>
  {/* Logo Section */}
  <div className='flex items-center gap-2 text-4xl font-bold'>
    <img src={Logo} alt='logo' className='w-16 h-16 bg-black p-1 rounded' />
    <div className='flex gap-x-2'>
      <span className='text-blue-400'>IGNIT</span>
      <span>IT-M</span>
    </div>
  </div>

  {/* Welcome Message */}
  <div className='flex-grow text-center font-extrabold'>
    <h1 className='bg-gradient-to-r from-pink-400 to-indigo-700 bg-clip-text text-transparent'>
      Welcome {admin?.name || 'Admin'}, To Your Dashboard
    </h1>
  </div>

  {/* Logout Button */}
  <button
    onClick={handleLogout}
    className='bg-red-500 py-2 px-4 rounded-xl cursor-pointer font-bold hover:bg-red-600 transition'
  >
    Logout
  </button>
</div>
  )
}

export default Navbar