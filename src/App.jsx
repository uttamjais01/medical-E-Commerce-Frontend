import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import './App.css'

import Home from './Component/Home'
import Login from './Component/Auth/Login'
import Signup from './Component/Auth/Signup'
import AdminSignUp from './Component/Auth/AdminSignUp'
import AdminLogin from './Component/Auth/AdminLogin'
import AdminDashboard from './Component/Admin/AdminDashboard'
import GetProduct from './Component/User/GetProduct'
import CategoryProducts from './Component/User/CategoryProducts'
import GetProductById from './Component/User/GetProductById'
import GetCart from './Component/User/getCart'

function App() {
  

  return (
    
      <div>
        <Routes> 
          <Route path = '/'  element = {<Home />} />
          <Route path='/login' element = {<Login/>} />
          <Route path='/signup' element = {<Signup/>} />
          <Route path='/admin' element = {<AdminSignUp />} />
          <Route path='/admin/login' element = {<AdminLogin />}/>
          <Route path='/admin/dashboard' element = {<AdminDashboard />}/>
          <Route path='/getProduct' element={<GetProduct />} />
          <Route path="/product/category/:categoryId" element={<CategoryProducts />} />
          <Route path="/product/:productId" element={<GetProductById />} />
          <Route path ='/product/cart' element={<GetCart /> } />

        </Routes>

     
      </div>
 
      
    
  )
}

export default App
