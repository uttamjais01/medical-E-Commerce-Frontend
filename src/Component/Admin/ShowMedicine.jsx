import axios from 'axios'
import React, { useEffect, useState} from 'react'
import { toast } from 'react-toastify'
import EditMedicine from './EditMedicine'
import DeleteMedicine from './DeleteMedicine'

const ShowMedicine = () => {
  const [medicineBlock, setMedicineBlock] = useState([])
 const [activeEditId, setActiveEditId] = useState(null)
const [activeDeleteId, setActiveDeleteId] = useState(null)

  const handleEditBlock = (id) => {
  setActiveEditId(prev => (prev === id ? null : id))
  setActiveDeleteId(null)
}

const handleDeleteBlock = (id) => {
  setActiveDeleteId(prev => (prev === id ? null : id))
  setActiveEditId(null)
}
  useEffect(() => {
    const AllMedicine = async () => {
      try {
        const res = await axios.get('https://medical-e-commerce-backend-gamma.vercel.app/product/', {
          withCredentials: true
        })
        setMedicineBlock(res.data.products)
        toast.success(res.data.message)
      } catch (error) {
        console.error('Error fetching medicines:', error.message)
        toast.error('Failed to fetch medicines')
      }
    }

    AllMedicine()
  }, [])

  return (
    <div className='bg-black'>
      <div className='text-black text-3xl font-bold bg-black '>Show Medicine</div>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 '>
        {medicineBlock.map((med) => (
          <div key={med._id} className=' bg-white rounded shadow border w-90 border-blue-100 mb-5 p-5'>
  <img src={med.imageUrl} alt={med.title} className='w-full h-90 object-cover rounded mb-3' />
  <h2 className='text-xl font-bold'>{med.title}</h2>
  <p>{med.description}</p>
  <p className='text-green-600 font-semibold'>₹{med.price}</p>
  <p className='text-sm text-gray-600'>Stock: {med.stock}</p>
  <p className='text-sm text-blue-500'>Category: {med.category?.categoryName}</p>
  <div className='flex justify-between mt-4'>

    
         <button onClick={() => handleEditBlock(med._id)}>
           <span className='bg-red-500 cursor-pointer text-blue-500 p-2 font-bold'>Edit Medicine</span>
        </button>     
        {activeEditId === med._id && (
        <div className='fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center overflow-auto'>
          <EditMedicine medicineId={med._id} />
        </div>
      )}

          <button onClick={() => handleDeleteBlock(med._id)}
          className='bg-red-500 cursor-pointer text-blue-500 p-1 font-bold h-10'
          > Delete Medicine</button>

             {activeDeleteId === med._id && (
        <div className='mt-2'>
          <DeleteMedicine medicineId={med._id} />
        </div>
      )}

            </div>

</div>
        ))}
      </div>
    </div>
  )
}

export default ShowMedicine