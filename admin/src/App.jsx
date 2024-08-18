import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Add from './pages/add/Add';
import List from './pages/list/List'
import Order from './pages/order/Order'
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const url = "http://localhost:4000";

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add url={url}/>} />
          <Route path='/list' element={<List url={url}/>} />
          <Route path='/order' element={<Order url={url}/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App