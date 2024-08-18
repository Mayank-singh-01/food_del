import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Add from './pages/add/Add';
import List from './pages/list/List'
import Order from './pages/order/Order'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add/>} />
          <Route path='/list' element={<List/>} />
          <Route path='/order' element={<Order/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App