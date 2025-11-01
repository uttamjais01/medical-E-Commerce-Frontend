import React, { useState } from 'react'
import AddMedicine from './AddMedicine'
import UserCount from './UserCount'
import ProductsCount from './ProductsCount'
import Navbar from './Navbar'
import SideBar from './SideBar'
import OrderCount from './OrderCount'
import Revenue from './Revenue'
import Page2 from './Page2'


const AdminDashboard = () => {
  
  

  return (
    <div className='bg-black '>
      <div className='0'>
  <Navbar />
  </div>
  <div className='flex'>
  <div className=' bg-blue-200 w-100 '>
    <SideBar />
    </div>
    <div className=''>
    <div className='flex p-3 '>
      <UserCount />
      <ProductsCount />
      <OrderCount />
      <Revenue />
      </div>
    
  </div>

    
</div>
<Page2 />
</div>

  )
}

export default AdminDashboard