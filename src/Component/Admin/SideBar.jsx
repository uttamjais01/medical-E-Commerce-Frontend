import React, { useState } from 'react'
import AddMedicine from './AddMedicine'
import { IoAddCircle } from 'react-icons/io5'
import { FaEdit } from 'react-icons/fa'
import ShowMedicine from './ShowMedicine'

const SideBar = () => {
  const [showAddMedicine, setShowAddMedicine] = useState(false)
  const [MedicineShow, setMedicineShow] = useState(false)

  const handleAddMedicineClick = () => {
    setMedicineShow(false)
    setShowAddMedicine(prev => !prev)
  }

  const handleShowMedicine = () => {
    setShowAddMedicine(false)
    setMedicineShow(prev => !prev)
  }

  return (
    <div className='w-64 bg-black min-h-screen text-white p-4  '>
      <button
        onClick={handleAddMedicineClick}
        className='flex items-center gap-2 p-3 hover:bg-gray-800 w-full text-left rounded'
      >
        <IoAddCircle className='text-3xl' />
        <span>Add Medicine</span>
      </button>

    {showAddMedicine && (
  <div className='absolute  top-64 left-[260px] mx-5  bg-white text-black shadow-lg p-4 z-50'>
      
      <AddMedicine />
  
  </div>
)}

 <div className='flex'>
      <button
        onClick={handleShowMedicine}
        className=' flex items-center gap-2 p-3 hover:bg-gray-800 w-full text-left rounded '
      >
        <FaEdit className='text-2xl' />
        <span>Show Medicine</span>
      </button>

      {MedicineShow && (
        <div className='absolute min-h-screen top-64 left-[260px] w-[1400px]   text-black shadow-lg  z-50'>
          <ShowMedicine />
        </div>
      )}
      </div>
    </div>
  )
}

export default SideBar