import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddMedicine = () => {
  const navigate = useNavigate()
  const [previewUrl, setPreviewUrl] = useState('')
  const [formData, setFormData] = useState({
    imageUrl: '',
    title: '',
    description: '',
    categoryName: '',
    price: '',
    stock: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'imageUrl') {
      const file = files[0]
      setFormData((prev) => ({
        ...prev,
        imageUrl: file
      }))
      setPreviewUrl(URL.createObjectURL(file))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    console.log(formData.categoryName);
    

    // Basic validation
    if (
      !formData.imageUrl ||
      !formData.title.trim() ||
      !formData.description.trim() ||
      !formData.categoryName.trim() ||
      !formData.price ||
      !formData.stock
    ) {
      toast.error('Please fill in all required fields')
      setLoading(false)
      return
    }

    if (formData.price <= 0 || formData.stock < 0) {
      toast.error('Price must be positive and stock cannot be negative')
      setLoading(false)
      return
    }
    // ✅ Category validation
  const validCategories = [
    'Skin Therapy','Vitamin B12','Women Care','Health Care','Beauty Care',
    'Skin Care','Baby Care','Hair Care','Oral Care','Medicine'
  ];

  if (!validCategories.includes(formData.categoryName)) {
    toast.error('Invalid category selected');
    setLoading(false);
    return;
  }


    const data = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value)
    })

    try {
      const res = await axios.post('http://localhost:3000/product/add', data, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      toast.success(res.data.message)
      navigate('/admin/dashboard')

      // Reset form
      setFormData({
        imageUrl: '',
        title: '',
        description: '',
        categoryName: '',
        price: '',
        stock: ''
      })
      setPreviewUrl('')
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='   '>
      <div className='w-full  bg-white rounded-xl p-8'>
        <h1 className='mb-6 text-3xl text-center font-extrabold text-gray-800 tracking-wide'>
          Admin Add Medicine
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type='file'
            name='imageUrl'
            onChange={handleChange}
            placeholder='Choose File'
            className='w-full mb-4 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
          />
    {/*}      {previewUrl && (
            <div className='mb-4'>
              <img
                src={previewUrl}
                alt='Preview'
                className='w-full h-48 object-cover rounded-lg'
              />
            </div>
          )} */}
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={handleChange}
            placeholder='Enter title'
            className='w-full mb-4 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
          />
          <input
            type='text'
            name='description'
            value={formData.description}
            onChange={handleChange}
            placeholder='Enter Description'
            className='w-full mb-4 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
          />
          <select
            name='categoryName'
            value={formData.categoryName}
            onChange={handleChange}
            className='w-full mb-4 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500'
          >
            <option value=''>Select Category</option>
            <option value="Skin Therapy">Skin Therapy</option>
            <option value="Vitamin B12">Vitamin B12</option>
            <option value="Women Care">Women Care</option>
            <option value="Health Care">Health Care</option>
            <option value="Beauty Care">Beauty Care</option>
            <option value="Skin Care">Skin Care</option>
            <option value="Baby Care">Baby Care</option>
            <option value="Hair Care">Hair Care</option>
            <option value="Oral Care">Oral Care</option>
            <option value="Medicine">Medicine</option>
          </select>
          <input
            type='number'
            name='price'
            value={formData.price}
            onChange={handleChange}
            placeholder='Enter price'
            className='w-full mb-4 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
          />
          <input
            type='number'
            name='stock'
            value={formData.stock}
            onChange={handleChange}
            placeholder='Enter Stock'
            className='w-full mb-4 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
          />
          <button
            type='submit'
            disabled={loading}
            className={`w-full bg-purple-800 text-white rounded ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Adding...' : 'Add Medicine'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddMedicine