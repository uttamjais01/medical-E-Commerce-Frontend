import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const HomePage = () => {
  const [formData, setFormData] = useState({ subscribe: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3000/subscribe', formData, {
        withCredentials: true,
      })
      toast.success(res.data.success)
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }

  return (
    <div className="min-h-screen px-4 py-10">
  {/* Newsletter Section */}
  <div className="w-full bg-white rounded-xl shadow-md p-6 sm:p-10">
    <div className="flex flex-col lg:flex-row items-center gap-8">
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-3xl sm:text-5xl font-bold text-blue-900">
          Join our Newsletter for $10 Off
        </h1>
        <h2 className="text-gray-500 mt-4 text-lg sm:text-xl">
          Register now to get the latest updates on promotions & coupons
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 flex-1 w-full">
        <input
          type="email"
          name="subscribe"
          placeholder="Your Email Address"
          value={formData.subscribe}
          onChange={handleChange}
          className="w-full sm:w-auto border border-gray-400 text-lg px-6 py-3 rounded-xl text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full sm:w-auto text-white bg-blue-500 px-6 py-3 rounded-xl text-xl font-bold hover:bg-blue-600 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>

  {/* Footer Section */}
  <div className="bg-blue-50 h-[500px] mt-10 py-10">
    <div className="container mx-auto flex flex-wrap justify-evenly gap-y-10 text-center sm:text-left">
      {/* Contact Us */}
      <div className="flex flex-col w-full sm:w-auto px-4">
        <h1 className="text-xl font-bold mb-4">Contact Us</h1>
        <h2 className="font-semibold">+1 7390087534</h2>
        <h2>Free from fixed and mobile phones in USA.</h2>
        <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
          <nav>Email:</nav>
          <nav className="font-semibold">uttamjaiswal@gmail.com</nav>
        </div>
        <h2 className="mt-2">Call center hours</h2>
        <h2>Mon - Sun 9:00 - 10:00</h2>
      </div>

      {/* Get to Know Us */}
      <div className="flex flex-col w-full sm:w-auto px-4">
        <h1 className="text-xl font-bold mb-4">Get to Know Us</h1>
        <h2>About Us</h2>
        <h2>Term & Policy</h2>
        <h2>Careers</h2>
        <h2>News & Blog</h2>
        <h2>Contact Us</h2>
      </div>

      {/* Information */}
      <div className="flex flex-col w-full sm:w-auto px-4">
        <h1 className="text-xl font-bold mb-4">Information</h1>
        <h2>Help Center</h2>
        <h2>Feedback</h2>
        <h2>FAQs</h2>
        <h2>Size Guide</h2>
        <h2>Payments</h2>
      </div>

      {/* Orders & Returns */}
      <div className="flex flex-col w-full sm:w-auto px-4">
        <h1 className="text-xl font-bold mb-4">Orders & Returns</h1>
        <h2>Track Order</h2>
        <h2>Delivery</h2>
        <h2>Services</h2>
        <h2>Returns</h2>
        <h2>Exchange</h2>
      </div>

      {/* Download Apps & Social */}
      <div className="flex flex-col w-full sm:w-auto px-4">
        <h1 className="text-xl font-bold mb-4">Download Apps:</h1>
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <h1 className="px-3 py-2 bg-black text-white rounded-lg">App Store</h1>
          <h1 className="px-3 py-2 bg-black text-white rounded-lg">Play Store</h1>
        </div>
        <h2 className="mb-2">Follow us:</h2>
        <div className="flex gap-2 justify-center sm:justify-start">
          <h1 className="px-2 py-1 bg-blue-500 rounded-xl text-white">fb</h1>
          <h1 className="px-2 py-1 bg-blue-500 rounded-xl text-white">X</h1>
          <h1 className="px-2 py-1 bg-blue-500 rounded-xl text-white">I</h1>
          <h1 className="px-2 py-1 bg-blue-500 rounded-xl text-white">P</h1>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default HomePage