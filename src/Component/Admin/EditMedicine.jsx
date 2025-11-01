import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const EditMedicine = ({ medicineId }) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    imageUrl: '',
    title: '',
    description: '',
    categoryName: '',
    price: '',
    stock: ''
  })
  const [previewUrl, setPreviewUrl] = useState('')

  // ✅ Fetch existing product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/product/getProduct/${medicineId}`, {
          withCredentials: true
        })
        const product = res.data
        setFormData({
          imageUrl: '',
          title: product.title,
          description: product.description,
          categoryName: product.category?.categoryName || '',
          price: product.price,
          stock: product.stock
        })
        setPreviewUrl(product.imageUrl)
      } catch (error) {
        toast.error('Failed to load product')
      }
    }

    fetchProduct()
  }, [medicineId])

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



  const handleForm = async (e) => {
    e.preventDefault()
    setLoading(true)

    const data = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value)
    })

    try {
      const res = await axios.put(
        `http://localhost:3000/product/update/${medicineId}`,
        data,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      toast.success(res.data.message)
      setTimeout(() => {
        window.location.reload()
      }, 1000)
      navigate('/admin/dashboard')
    } catch (error) {
      toast.error(error?.response?.data?.error || 'Update failed')
    } finally {
      setLoading(false)
    }
  }

  return (
   <div className=" w-full flex items-center justify-center bg-gray-100 px-4 py-8">
    <form onSubmit={handleForm} className='space-y-4 bg-white p-4 rounded shadow'>
      <h2 className='text-xl font-bold'>Edit Medicine</h2>

      <input
        type='file'
        name='imageUrl'
        onChange={handleChange}
        className='w-full border p-2 rounded'
      />
      {previewUrl && (
        <img src={previewUrl} alt='Preview' className='w-full h-48 object-cover rounded mb-2' />
      )}

      <input
        type='text'
        name='title'
        value={formData.title}
        onChange={handleChange}
        placeholder='Title'
        className='w-full border p-2 rounded'
        required
      />

      <input
        type='text'
        name='description'
        value={formData.description}
        onChange={handleChange}
        placeholder='Description'
        className='w-full border p-2 rounded'
        required
      />

      <input
        type='text'
        name='categoryName'
        value={formData.categoryName}
        onChange={handleChange}
        placeholder='Category'
        className='w-full border p-2 rounded'
        required
      />

      <input
        type='number'
        name='price'
        value={formData.price}
        onChange={handleChange}
        placeholder='Price'
        className='w-full border p-2 rounded'
        required
      />

      <input
        type='number'
        name='stock'
        value={formData.stock}
        onChange={handleChange}
        placeholder='Stock'
        className='w-full border p-2 rounded'
        required
      />

      <button
        type='submit'
        disabled={loading}
        className={`w-full bg-blue-600 text-white py-2 rounded ${loading ? 'opacity-50' : ''}`}
      >
        {loading ? 'Updating...' : 'Update Medicine'}
      </button>
    </form>
    </div>
  )
}

export default EditMedicine