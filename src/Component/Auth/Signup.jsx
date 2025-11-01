import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post('https://medical-e-commerce-backend-gamma.vercel.app/user/', formData, {
        withCredentials: true,
      });

      toast.success(res.data.message || 'Signup successful!');
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-fuchsia-800 via-purple-900 to-indigo-900'>
      <div className='w-full max-w-md bg-white rounded-xl p-8 shadow-lg'>
        <div className='text-2xl mb-6 text-center'>
          <h1 className='mb-6 text-3xl font-extrabold text-gray-800 tracking-wide'>Sign Up to Your Account</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter Name'
            className='w-full mb-4 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
            required
          />
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter Email'
            className='w-full mb-4 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
            required
          />
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter Password'
            className='w-full mb-4 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
            required
          />
          <button
            type='submit'
            disabled={loading}
            className={`w-full py-2 bg-purple-600 text-white rounded ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;